import { Module } from '@nestjs/common';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ActionsModule } from './actions/actions.module';
import { SessionsModule } from './session/sessions.module';
import { UsersModule } from './users/users.module';
import { UserActionsModule } from './user-actions/user-actions.module';

@Module({
  imports: [
    ActionsModule,
    SessionsModule,
    UsersModule,
    UserActionsModule,
    TypeOrmModule.forRoot({}),
  ],
})
export class DatabaseModule {}
