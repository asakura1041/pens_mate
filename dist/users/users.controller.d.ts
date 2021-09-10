import { UserService } from './users.service';
import { User, Prisma } from '.prisma/client';
export declare class UsersController {
    private usersService;
    constructor(usersService: UserService);
    index(): Promise<User[]>;
    show(id: string): Promise<User>;
    create(data: Prisma.UserCreateInput): Promise<User>;
    update(id: string, data: Prisma.UserUpdateInput): Promise<User>;
    remove(id: string): Promise<User>;
}
