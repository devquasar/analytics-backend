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
    return this.userActionsRepository
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
  }

  async averagePages() {
    return this.userActionsRepository
      .createQueryBuilder('user_actions')
      .select('session_id')
      .addSelect('user_id')
      .addSelect('count(distinct action_id)')
      .where('action_id IN (:...ids)', { ids: [1, 2, 3, 4, 6, 7] })
      .groupBy('session_id')
      .addGroupBy('user_id')
      .getRawMany();
  }

  async addUserAction(userAction): Promise<UserActions> {
    const newActions = await this.userActionsRepository.save(userAction);
    return newActions;
  }
}
