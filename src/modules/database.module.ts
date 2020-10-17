import { Module } from '@nestjs/common';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ActionsModule } from './actions/actions.module';
import { SessionsModule } from './session/sessions.module';
import { UsersModule } from './users/users.module';
import { UserActionsModule } from './user-actions/user-actions.module';

import { Users } from './users/users.entity';
import { Sessions } from './session/sessions.entity';
import { Actions } from './actions/actions.entity';
import { UserActions } from './user-actions/user-actions.entity';

@Module({
  imports: [
    ActionsModule,
    SessionsModule,
    UsersModule,
    UserActionsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'example',
      database: 'analytics',
      entities: [Users, Sessions, Actions, UserActions],
      migrations: [join(__dirname, 'migration/*.ts')],
      cli: {
        migrationsDir: join(__dirname, 'migration'),
      },
    }),
  ],
})
export class DatabaseModule {}
