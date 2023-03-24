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
exports.UnConfirmedUserSchema = exports.UnConfirmedUser = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let UnConfirmedUser = class UnConfirmedUser {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Имя', description: 'Имя пользователя' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UnConfirmedUser.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@gmail.com', description: 'Email пользователя' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UnConfirmedUser.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'sdfdf3r4341', description: 'Пароль' }),
    (0, mongoose_1.Prop)({ default: 'password' }),
    __metadata("design:type", String)
], UnConfirmedUser.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'M', description: 'Пол пользователя' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UnConfirmedUser.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Строка', description: 'Город пользователя' }),
    (0, mongoose_1.Prop)({ default: 'Секрет' }),
    __metadata("design:type", String)
], UnConfirmedUser.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Строка', description: 'Актуальный код для подтверждения' }),
    (0, mongoose_1.Prop)({ default: 'Секрет' }),
    __metadata("design:type", Number)
], UnConfirmedUser.prototype, "actualCodeForConfirmation", void 0);
UnConfirmedUser = __decorate([
    (0, mongoose_1.Schema)()
], UnConfirmedUser);
exports.UnConfirmedUser = UnConfirmedUser;
;
exports.UnConfirmedUserSchema = mongoose_1.SchemaFactory.createForClass(UnConfirmedUser);
//# sourceMappingURL=unConfirmedUser.schema.js.map