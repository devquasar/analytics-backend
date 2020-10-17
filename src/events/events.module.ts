import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { UsersModule } from '../modules/users/users.module';
import { SessionsModule } from '../modules/session/sessions.module';
import { UserActionsModule } from '../modules/user-actions/user-actions.module';

@Module({
  providers: [EventsGateway],
  imports: [UsersModule, SessionsModule, UserActionsModule],
})
export class EventsModule {}
