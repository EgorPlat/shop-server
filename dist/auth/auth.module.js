"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mail_module_1 = require("../mail/mail.module");
const unConfirmedUser_schema_1 = require("../schemas/unConfirmedUser.schema");
const users_module_1 = require("../users/users.module");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService],
        imports: [
            mail_module_1.MailModule,
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            jwt_1.JwtModule.register({
                secret: process.env.PRIVATE_KEY || 'SECRET',
                signOptions: {
                    expiresIn: '1h'
                }
            }),
            mongoose_1.MongooseModule.forFeature([{ name: unConfirmedUser_schema_1.UnConfirmedUser.name, schema: unConfirmedUser_schema_1.UnConfirmedUserSchema }]),
        ],
        exports: [auth_service_1.AuthService, jwt_1.JwtModule]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map