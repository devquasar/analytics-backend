import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserActions } from './user-actions.entity';

@Injectable()
export class UserActionsService {
  constructor(
    @InjectRepository(UserActions)
    private userActionsRepository: Repository<UserActions>,
  ) {}

  findAll(): Promise<UserActions[]> {
    return this.userActionsRepository.find();
  }

  async findOne(userActionsId): Promise<UserActions> {
    const action = await this.userActionsRepository.findOne(userActionsId);
    return action;
  }

  async addUserAction(userAction): Promise<UserActions> {
    const newActions = await this.userActionsRepository.save(userAction);
    return newActions;
  }
}
