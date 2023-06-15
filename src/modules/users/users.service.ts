import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "src/schemas/user.schema";
import { Model } from 'mongoose';
import { CreateUserDto } from "src/dto/create-user.dto";
import { HelpJwtService } from "src/help/token.service";
import { Request } from 'express';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>, private helpJwtService: HelpJwtService){}

    async getUsers() {
        const users = await this.userModel.find({}, {
            password: false,
            _id: false,
            __v: false
        });
        return users;
    }

    async addUser(dto: CreateUserDto) {
        let candidate = {
            ...dto, 
            login: Math.floor(Math.random()*20000),
            userId: "id" + String(Math.floor(Math.random()*100000))
        }
        const user = await this.userModel.create(candidate);
        if(user) { 
            return user;
        }
    }

    async getUserByPhone(phoneNumber: string) {
        const user = await this.userModel.findOne({ phoneNumber: phoneNumber }, {
            password: false,
            _id: false,
            __v: false
        });
        if (user) {
            return user;
        } else {
            return null;
        }
    }
}