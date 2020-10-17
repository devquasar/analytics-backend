import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  async findOne(userId): Promise<Users> {
    const user = await this.usersRepository.findOne(userId);
    return user;
  }

  async addUser(userId): Promise<Users> {
    const newUser = await this.usersRepository.save(userId);
    return newUser;
  }
}
