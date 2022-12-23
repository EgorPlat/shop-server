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
exports.PostCommentSchema = exports.PostComment = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let PostComment = class PostComment {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Уникальный comment ид' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PostComment.prototype, "commentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Уникальный post ид' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PostComment.prototype, "postId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'postOwnerId', description: 'Айди пользователя создателя поста' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PostComment.prototype, "postOwnerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'commentOwnerId', description: 'Айди пользователя создателя комментария' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PostComment.prototype, "commentOwnerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'text', description: 'Текст комментария' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PostComment.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'text', description: 'Дата комментария' }),
    (0, mongoose_1.Prop)({ default: new Date() }),
    __metadata("design:type", Date)
], PostComment.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'text', description: 'Имя пользтвателя у комментария' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PostComment.prototype, "commentOwnerAvatar", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'text', description: 'Аватар пользователя у комментария' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PostComment.prototype, "commentOwnerName", void 0);
PostComment = __decorate([
    (0, mongoose_1.Schema)()
], PostComment);
exports.PostComment = PostComment;
exports.PostCommentSchema = mongoose_1.SchemaFactory.createForClass(PostComment);
//# sourceMappingURL=postComment.schema.js.map