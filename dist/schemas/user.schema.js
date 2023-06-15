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
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let User = class User {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Уникальный ид' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Имя', description: 'Имя пользователя' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Фамилия', description: 'Фамилия пользователя' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "secondName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '89693469999', description: 'Телефон пользователя' }),
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'sdfdf3r4341', description: 'Пароль' }),
    (0, mongoose_1.Prop)({ default: 'password' }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2022-03-25T13:40:13.192+00:00', description: 'Дата регистрации пользователя' }),
    (0, mongoose_1.Prop)({ default: new Date() }),
    __metadata("design:type", Date)
], User.prototype, "dateRegister", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2022-03-25T13:40:13.192+00:00', description: 'Дата рождения пользователя' }),
    (0, mongoose_1.Prop)({ default: new Date() }),
    __metadata("design:type", Date)
], User.prototype, "birthDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Строка', description: 'Город пользователя' }),
    (0, mongoose_1.Prop)({ default: 'Секрет' }),
    __metadata("design:type", String)
], User.prototype, "city", void 0);
User = __decorate([
    (0, mongoose_1.Schema)()
], User);
exports.User = User;
;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.schema.js.map