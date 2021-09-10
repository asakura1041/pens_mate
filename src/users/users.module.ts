import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UserService, PrismaService]
})
export class UsersModule {}
