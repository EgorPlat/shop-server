import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "src/schemas/user.schema";
import { Model } from 'mongoose';
import { CreateUserDto } from "src/dto/create-user.dto";
import { IPeople } from "src/interfaces/people.interface";
import { ISortParams } from "src/interfaces/sort.params";
import {Request} from 'express';
import { JwtService } from "@nestjs/jwt";
import { IAccount } from "src/interfaces/account.interface";
import { IProfile } from "src/interfaces/profile.interface";

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
    async getSortedPeoples(sortParams: ISortParams) {
        let peoples = await this.getUserList();
        if(sortParams.age !== 50) {
            peoples = peoples.filter((user) => user.age == sortParams.age);
        }
        if(sortParams.gender !== "") {
            peoples = peoples.filter((user) => user.gender == sortParams.gender);;
        }
        throw new HttpException(peoples, 200);
    }
    async getUserByEmail(email: string) {
        const user = await this.userModel.findOne({email: email}, {
            _id: false,
            __v: false
        });
        console.log(user);
        return user;
    }
    async updateUserStatus(decodedToken: any, status: string) {

        await this.userModel.updateOne({email : decodedToken.email}, {$set: {status : status}});

        const updatedUser: User = await this.userModel.findOne({email: decodedToken.email}, {
            _id: false,
            __v: false,
            password: false
        });
        if(updatedUser) { 
            return updatedUser;
        }
    }
    async updateUserAccount(decodedToken: any, accountData: IAccount) {

        await this.userModel.updateOne({email : decodedToken.email}, {$set: {
            email : accountData.email, 
            password: accountData.password,
            login: accountData.login
        }});

        const updatedUser: User = await this.userModel.findOne({email: decodedToken.email}, {
            _id: false,
            __v: false,
            password: false
        });
        if(updatedUser) { 
            return updatedUser;
        }
    }
    async updateUserProfile(decodedToken: any, accountData: IProfile) {

        await this.userModel.updateOne({email : decodedToken.email}, {$set: {
            phoneNumber : accountData.phoneNumber, 
            name: accountData.name,
            birthDate: accountData.birthDate
        }});

        const updatedUser: User = await this.userModel.findOne({email: decodedToken.email}, {
            _id: false,
            __v: false,
            password: false
        });
        if(updatedUser) { 
            return updatedUser;
        }
    }
}