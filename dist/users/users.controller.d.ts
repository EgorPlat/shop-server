import { CreateUserDto } from "src/dto/create-user.dto";
import { ISortParams } from "src/interfaces/sort.params";
import { User } from "src/schemas/user.schema";
import { UserService } from "./users.service";
import { Request } from "express";
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
    getUserByUserId(req: Request): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    removeUserInterest(req: Request): Promise<User>;
    addUserInterest(req: Request): Promise<User>;
    getUserList(): Promise<import("src/interfaces/people.interface").IPeople[]>;
    getSortedPeoples(sortParams: ISortParams): Promise<void>;
    addUserEvent(request: Request): Promise<User>;
    addUserPost(file: any, request: Request): Promise<void>;
}
