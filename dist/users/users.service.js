"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../schemas/user.schema");
const mongoose_2 = require("mongoose");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async getUsers() {
        const users = await this.userModel.find({}, {
            password: false,
            _id: false,
            __v: false
        });
        return users;
    }
    async addUser(dto) {
        let candidate = Object.assign(Object.assign({}, dto), { login: Math.floor(Math.random() * 10000) });
        const user = await this.userModel.create(candidate);
        return user;
    }
    async getUserByLogin(login) {
        const user = await this.userModel.findOne({ login: login }, {
            password: false,
            _id: false,
            __v: false
        });
        return user;
    }
    async getUserList() {
        const user = await this.userModel.find({}, {
            password: false,
            _id: false,
            __v: false
        });
        const peoples = user.map(user => {
            return {
                login: user.login,
                userName: user.name,
                userAvatar: user.avatar,
                status: user.status,
                age: 20,
                city: user.city,
                gender: user.gender
            };
        });
        return peoples;
    }
    async getSortedPeoples(sortParams) {
        let peoples = await this.getUserList();
        if (sortParams.age !== 50) {
            peoples = peoples.filter((user) => user.age == sortParams.age);
        }
        if (sortParams.gender !== "") {
            peoples = peoples.filter((user) => user.gender == sortParams.gender);
            ;
        }
        throw new common_1.HttpException(peoples, 200);
    }
    async getUserByEmail(email) {
        const user = await this.userModel.findOne({ email: email }, {
            _id: false,
            __v: false
        });
        console.log(user);
        return user;
    }
    async getUserByUserId(userId) {
        const user = await this.userModel.findOne({ userId: userId }, {
            _id: false,
            __v: false
        });
        console.log(user);
        return user;
    }
    async updateUserStatus(decodedToken, status) {
        await this.userModel.updateOne({ email: decodedToken.email }, { $set: { status: status } });
        const updatedUser = await this.userModel.findOne({ email: decodedToken.email }, {
            _id: false,
            __v: false,
            password: false
        });
        if (updatedUser) {
            return updatedUser;
        }
    }
    async updateUserAccount(decodedToken, accountData) {
        await this.userModel.updateOne({ email: decodedToken.email }, { $set: {
                email: accountData.email,
                password: accountData.password,
                login: accountData.login
            } });
        const updatedUser = await this.userModel.findOne({ email: decodedToken.email }, {
            _id: false,
            __v: false,
            password: false
        });
        if (updatedUser) {
            return updatedUser;
        }
    }
    async updateUserProfile(decodedToken, accountData) {
        await this.userModel.updateOne({ email: decodedToken.email }, { $set: {
                phoneNumber: accountData.phoneNumber,
                name: accountData.name,
                birthDate: accountData.birthDate
            } });
        const updatedUser = await this.userModel.findOne({ email: decodedToken.email }, {
            _id: false,
            __v: false,
            password: false
        });
        if (updatedUser) {
            return updatedUser;
        }
    }
    async updateUserAvatar(file, user) {
        await this.userModel.updateOne({ email: user.email }, { $set: {
                avatar: file.filename,
            } });
        const updatedUser = await this.userModel.findOne({ email: user.email }, {
            _id: false,
            __v: false,
            password: false
        });
        if (updatedUser) {
            return updatedUser;
        }
        console.log(file);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map