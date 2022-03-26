import { User, UserDocument } from "src/schemas/user.schema";
import { Model } from 'mongoose';
import { CreateUserDto } from "src/dto/create-user.dto";
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    getUsers(): Promise<(User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    addUser(dto: CreateUserDto): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getUserByEmail(email: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
