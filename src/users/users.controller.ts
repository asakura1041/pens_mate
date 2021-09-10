import { UserService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User, Prisma } from '.prisma/client';

@Controller('users')
export class UsersController {
  constructor(private usersService: UserService) {}

  @Get()
  async index(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(+id);
  }

  @Post()
  async create(@Body() data: Prisma.UserCreateInput): Promise<User> {
    return this.usersService.create(data)
  }
  
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.usersService.update(+id, data)
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<User> {
    return this.usersService.remove(+id)
  }
}
