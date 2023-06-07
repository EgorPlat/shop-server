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
exports.TariffSchema = exports.Tariff = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Tariff = class Tariff {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Уникальный ид' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Tariff.prototype, "tariffId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Годовой", description: 'Название тарифа' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Tariff.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1000, description: 'Стоимость тарифа' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Tariff.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10, description: 'Срок действия в месяцах' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Tariff.prototype, "periodMonth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Айди доступных возможностей' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Tariff.prototype, "opportunities", void 0);
Tariff = __decorate([
    (0, mongoose_1.Schema)()
], Tariff);
exports.Tariff = Tariff;
exports.TariffSchema = mongoose_1.SchemaFactory.createForClass(Tariff);
//# sourceMappingURL=tariffs.schema.js.map