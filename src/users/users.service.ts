import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "src/schemas/user.schema";
import { Model } from 'mongoose';
import { CreateUserDto } from "src/dto/create-user.dto";
import { IPeople } from "src/interfaces/people.interface";
import { ISortParams } from "src/interfaces/sort.params";

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
        let candidate = {...dto, login: Math.floor(Math.random()*10000)}
        const user = await this.userModel.create(candidate);
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
    async getUserList() {
        const user = await this.userModel.find({}, {
            password: false,
            _id: false,
            __v: false
        })
        const peoples: IPeople[] = user.map(user => {
            return {
                login: user.login,
                userName: user.name,
                userAvatar: user.avatar,
                status: user.status,
                age: 20,
                city: user.city,
                gender: user.gender
            }
        })
        return peoples;
    }
    async getSortedUsers(sortParams: ISortParams) {
        let userList = await this.getUserList();
        if(sortParams.age !== 50) {
            userList = userList.filter((user) => user.age == sortParams.age);
            console.log(userList);
        }
        if(sortParams.gender !== "") {
            userList = userList.filter((user) => user.gender == sortParams.gender);
            console.log(userList);
        }
        return userList;
    }
    async getUserByEmail(email: string) {
        const user = await this.userModel.findOne({email: email}, {
            _id: false,
            __v: false
        });
        console.log(user);
        return user;
    }
}