import { CreateUserDto } from "src/dto/create-user.dto";
import { User } from "src/schemas/user.schema";
import { UserService } from "./users.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<(User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    addUser(userDto: CreateUserDto): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getUserByLogin(login: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
