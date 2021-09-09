import { CreateUserDTO } from './users.dto';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  index(): {} {
    return {message: "users"}
  }

  @Get(':id')
  show(@Param() params): string {
    console.log(params.id)
    return 'user'
  }

  @Post()
  create(@Body() createUserDTO: CreateUserDTO): boolean {
    console.log(createUserDTO)
    return true
  }
  
  @Put()
  update(): string {
    return 'update'
  }
}
