import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserActions } from './user-actions.entity';
import { UserActionsService } from './user-actions.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserActions])],
  providers: [UserActionsService],
  exports: [UserActionsService],
})
export class UserActionsModule {}
