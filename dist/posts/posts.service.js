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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const token_service_1 = require("../help/token.service");
const user_schema_1 = require("../schemas/user.schema");
const mongoose_2 = require("mongoose");
const postComment_schema_1 = require("../schemas/postComment.schema");
let PostsService = class PostsService {
    constructor(jwtHelpService, userModel, postCommentModel) {
        this.jwtHelpService = jwtHelpService;
        this.userModel = userModel;
        this.postCommentModel = postCommentModel;
    }
    async addNewCommentToUserPost(request) {
        const { email } = this.jwtHelpService.decodeJwt(request);
        const { body } = request;
        const user = await this.userModel.findOne({ email: email });
        if (user) {
            const newComment = {
                text: body.text,
                commentOwnerId: body.commentOwnerId,
                postOwnerId: body.postOwnerId,
                postId: body.postId,
                commentId: String(Math.floor(Math.random() * 1000000)),
                commentOwnerAvatar: user.avatar,
                commentOwnerName: user.name,
            };
            const newCreatedComment = await this.postCommentModel.create(newComment);
            throw new common_1.HttpException(newCreatedComment, 201);
        }
        else {
            throw new common_1.HttpException('Пользователь не найден. Попробуйте обновить токен.', 400);
        }
    }
    async getAllPostCommentsByPostId(request) {
        const { postId } = request.body;
        const comments = await this.postCommentModel.find({ postId: postId });
        if (comments) {
            throw new common_1.HttpException(comments, 200);
        }
        else {
            throw new common_1.HttpException('Комментариев к посту нет.', 400);
        }
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(postComment_schema_1.PostComment.name)),
    __metadata("design:paramtypes", [token_service_1.HelpJwtService,
        mongoose_2.Model,
        mongoose_2.Model])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map