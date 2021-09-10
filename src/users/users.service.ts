import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = []
  index(): string {
    return 'index'
  }

  show(): string {
    return 'show'
  }

  create(user: string) {
    this.users.push(user)
  }

  update(user: string) {
    this.users.push(user)
  }
}
