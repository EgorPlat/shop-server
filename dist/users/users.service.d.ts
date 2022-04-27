import { User, UserDocument } from "src/schemas/user.schema";
import { Model } from 'mongoose';
import { CreateUserDto } from "src/dto/create-user.dto";
import { IPeople } from "src/interfaces/people.interface";
import { ISortParams } from "src/interfaces/sort.params";
import { IAccount } from "src/interfaces/account.interface";
import { IProfile } from "src/interfaces/profile.interface";
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    getUsers(): Promise<(User & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    addUser(dto: CreateUserDto): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getUserByLogin(login: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getUserList(): Promise<IPeople[]>;
    getSortedPeoples(sortParams: ISortParams): Promise<void>;
    getUserByEmail(email: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getUserByUserId(userId: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    updateUserStatus(decodedToken: any, status: string): Promise<User>;
    updateUserAccount(decodedToken: any, accountData: IAccount): Promise<User>;
    updateUserProfile(decodedToken: any, accountData: IProfile): Promise<User>;
    updateUserAvatar(file: any, user: User): Promise<User>;
}
