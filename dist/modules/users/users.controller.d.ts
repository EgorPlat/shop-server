import { UserService } from "./users.service";
import { User } from "src/schemas/user.schema";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<(User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
}
