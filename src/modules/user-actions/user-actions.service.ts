import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { UserActions } from './user-actions.entity';
import { Actions } from '../actions/actions.entity';

@Injectable()
export class UserActionsService {
  constructor(
    @InjectRepository(UserActions)
    private userActionsRepository: Repository<UserActions>,
  ) {}

  findAll(): Promise<UserActions[]> {
    return this.userActionsRepository.find();
  }

  async allActions() {
    const action = await getRepository(UserActions)
      .createQueryBuilder('user_actions')
      .select('user_actions.id')
      .addSelect('user_actions.user_id')
      .addSelect('user_actions.session_id')
      .addSelect('actions.display')
      .leftJoin(
        Actions,
        'actions',
        'actions.actions_id = user_actions.action_id',
      )
      .orderBy('user_actions.id')
      .getRawMany();
    return action;
  }

  async addUserAction(userAction): Promise<UserActions> {
    const newActions = await this.userActionsRepository.save(userAction);
    return newActions;
  }
}
