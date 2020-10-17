import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { UsersService } from '../modules/users/users.service';
import { SessionsService } from '../modules/session/sessions.service';
import { UserActionsService } from '../modules/user-actions/user-actions.service';

@WebSocketGateway()
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private usersService: UsersService,
    private sessionsService: SessionsService,
    private actionService: UserActionsService,
  ) {}
  @WebSocketServer() server: Server;

  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage('addUser')
  async addUser(client: Socket, payload: any): Promise<any> {
    const { user_id } = payload;
    let user = await this.usersService.findOne(user_id);
    if (!user) {
      this.usersService.addUser(payload);
      this.logger.log('NEW USER, HURRAY!!');
    }
  }

  @SubscribeMessage('visit')
  async addAction(client: Socket, payload: any): Promise<any> {
    payload.session_id = client.id;
    this.actionService.addUserAction(payload);
  }

  @SubscribeMessage('addSession')
  addSession(client: Socket, payload: any): void {
    payload.session_id = client.id;
    this.sessionsService.addSession(payload);
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
    this.sessionsService.setEnd(client.id);
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}
