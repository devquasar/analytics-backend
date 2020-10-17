import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sessions } from './sessions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sessions])],
  controllers: [SessionsController],
  providers: [SessionsService],
  exports: [SessionsService],
})
export class SessionsModule {}
