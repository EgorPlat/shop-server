import { User, UserDocument } from "src/schemas/user.schema";
import { Model } from 'mongoose';
import { CreateUserDto } from "src/dto/create-user.dto";
import { HelpJwtService } from "src/help/token.service";
export declare class UserService {
    private userModel;
    private helpJwtService;
    constructor(userModel: Model<UserDocument>, helpJwtService: HelpJwtService);
    getUsers(): Promise<(User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    addUser(dto: CreateUserDto): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getUserByPhone(phoneNumber: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
