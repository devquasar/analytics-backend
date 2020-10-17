import { Controller, Get, Post, Res, Body, Param } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { Sessions } from './sessions.entity';

@Controller('sessions')
export class SessionsController {
  constructor(private sessionsService: SessionsService) {}
  @Get()
  async findAll() {
    const sessions = await this.sessionsService.findAll();
    return sessions;
  }

  @Get(':id')
  async findOne(@Param('id') sessionId) {
    const session = await this.sessionsService.findOne(sessionId);
    return session;
  }

  @Post()
  async addSession(@Body() Session: Sessions) {
    const newSession = this.sessionsService.addSession(Session);
    return newSession;
  }
}
