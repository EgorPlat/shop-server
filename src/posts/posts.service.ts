import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { HelpJwtService } from 'src/help/token.service';
import { User, UserDocument } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import {
  PostComment,
  PostCommentDocument,
} from 'src/schemas/postComment.schema';

@Injectable()
export class PostsService {
  constructor(
    private jwtHelpService: HelpJwtService,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(PostComment.name) private postCommentModel: Model<PostCommentDocument>,
  ) {}

  async addNewCommentToUserPost(request: Request) {
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
        commentOwnerLogin: user.login
      };
      const newCreatedComment = await this.postCommentModel.create(newComment);
      throw new HttpException(newCreatedComment, 201);
    } else {
      throw new HttpException(
        'Пользователь не найден. Попробуйте обновить токен.',
        400,
      );
    }
  }

  async getAllPostCommentsByPostId(request: Request) {
    const { postId } = request.body;
    const comments = await this.postCommentModel.find({ postId: postId });
    if (comments) {
      throw new HttpException(comments, 200);
    } else {
      throw new HttpException('Комментариев к посту нет.', 400);
    }
  }

  async getAllPostCommentsByPostIdPagination(request: Request) {
    const { postId } = request.body;
    const { pageNumber } = request.body;
    const PAGE_SIZE = 2;

    const comments = await this.postCommentModel.find({ postId: postId });
    if (comments) {
      throw new HttpException(comments.slice(0, PAGE_SIZE * pageNumber), 200);
    } else {
      throw new HttpException('Комментариев к посту нет.', 400);
    }
  }
}
