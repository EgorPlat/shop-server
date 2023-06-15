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
const user_schema_1 = require("../../schemas/user.schema");
const mongoose_2 = require("mongoose");
const token_service_1 = require("../../help/token.service");
let UserService = class UserService {
    constructor(userModel, helpJwtService) {
        this.userModel = userModel;
        this.helpJwtService = helpJwtService;
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
        let candidate = Object.assign(Object.assign({}, dto), { login: Math.floor(Math.random() * 20000), userId: "id" + String(Math.floor(Math.random() * 100000)) });
        const user = await this.userModel.create(candidate);
        if (user) {
            return user;
        }
    }
    async getUserByPhone(phoneNumber) {
        const user = await this.userModel.findOne({ phoneNumber: phoneNumber }, {
            password: false,
            _id: false,
            __v: false
        });
        if (user) {
            return user;
        }
        else {
            return null;
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, token_service_1.HelpJwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map