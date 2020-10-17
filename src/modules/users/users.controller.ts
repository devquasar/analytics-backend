import { Controller, Get, Post, Res, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return users;
  }

  @Get(':id')
  async findOne(@Param('id') userId) {
    const user = await this.usersService.findOne(userId);
    return user;
  }

  @Post()
  async addUser(@Body() Users: Users) {
    const newUser = this.usersService.addUser(Users);
    return newUser;
  }
}
