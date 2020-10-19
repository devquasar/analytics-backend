import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { Sessions } from './sessions.entity';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(Sessions)
    private sessionsRepository: Repository<Sessions>,
  ) {}

  async allSessions() {
    const sessions = await getRepository(Sessions)
      .createQueryBuilder('sessions')
      .getRawMany();
    return sessions;
  }

  findAll(): Promise<Sessions[]> {
    return this.sessionsRepository.find();
  }

  async findOne(sessionId): Promise<Sessions> {
    const session = await this.sessionsRepository.findOne(sessionId);
    return session;
  }

  async setEnd(sessionId): Promise<any> {
    const session = await this.sessionsRepository.update(sessionId, {
      end: new Date(),
    });
    return session;
  }

  async addSession(session): Promise<Sessions> {
    const newSession = await this.sessionsRepository.save(session);
    return newSession;
  }
}
