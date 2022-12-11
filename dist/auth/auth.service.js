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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login(userDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        if (user) {
            const passwordEquals = user.password === userDto.password;
            if (passwordEquals && user.password) {
                const data = await this.generateToken(user);
                throw new common_1.HttpException(data, 200);
            }
            else {
                throw new common_1.HttpException({ message: 'Неккоректные данные. Пожалуйста попробуйте снова.' }, 400);
            }
        }
        else {
            throw new common_1.HttpException({ message: 'Запрашиваемый пользователь не найден. Пожалуйста попробуйте снова.' }, 404);
        }
    }
    async generateToken(user) {
        const payload = { email: user.email, name: user.name, city: user.city, avatar: user.avatar };
        return {
            auth: { token: this.jwtService.sign(payload, { expiresIn: '1h' }) },
            profile: { user }
        };
    }
    async registration(userDto) {
        const condidate = await this.userService.getUserByEmail(userDto.email);
        if (condidate) {
            throw new common_1.HttpException('Пользователь с таким email уже есть.', common_1.HttpStatus.BAD_REQUEST);
        }
        const user = await this.userService.addUser(userDto);
        const userWithTokens = await this.generateToken(user);
        throw new common_1.HttpException(userWithTokens, 201);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UserService, jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map