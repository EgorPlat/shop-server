import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "src/schemas/user.schema";
import { Model } from 'mongoose';
import { CreateUserDto } from "src/dto/create-user.dto";

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    async getUsers() {
        const users = await this.userModel.find({}, {
            password: false,
            _id: false,
            __v: false
        });
        return users;
    }

    async addUser(dto: CreateUserDto) {
        const user = await this.userModel.create(dto);
        return user;
    }
    async getUserByLogin(login: string) {
        const user = await this.userModel.findOne({login: login}, {
            password: false,
            _id: false,
            __v: false
        })
        return user;
    }

    async getUserByEmail(email: string) {
        const user = await this.userModel.findOne({email: email}, {
            password: false,
            _id: false,
            __v: false
        });
        console.log(user);
        return user;
    }
}