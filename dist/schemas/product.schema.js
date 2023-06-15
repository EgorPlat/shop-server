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
exports.ProductSchema = exports.Product = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Product = class Product {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Уникальный ид' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Product.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4902-20', description: 'Уникальный ид' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Product.prototype, "articleNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Торс', description: 'Название категории' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [2, 3, 4], description: 'Категории' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Product.prototype, "categorysId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ['/product.png', '/product1.png'], description: 'Изображения' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Product.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [], description: 'Характеристики' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Product.prototype, "specifications", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5, description: 'Остаток на складе' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Product.prototype, "stockNumber", void 0);
Product = __decorate([
    (0, mongoose_1.Schema)()
], Product);
exports.Product = Product;
;
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
//# sourceMappingURL=product.schema.js.map