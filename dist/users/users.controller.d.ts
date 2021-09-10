import { UsersService } from './users.service';
import { CreateUserDTO } from './users.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    index(): string;
    show(params: any): string;
    create(createUserDTO: CreateUserDTO): void;
    update(): void;
}
