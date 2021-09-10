import { UsersService } from './users.service';
import { CreateUserDTO } from './users.dto';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  index(): string {
    return this.usersService.index()
  }

  @Get(':id')
  show(@Param() params): string {
    console.log(params.id)
    return this.usersService.show()
  }

  @Post()
  create(@Body() createUserDTO: CreateUserDTO) {
    console.log(createUserDTO)
    this.usersService.create('user1')
  }
  
  @Put()
  update() {
    this.usersService.update('user2')
  }
}
