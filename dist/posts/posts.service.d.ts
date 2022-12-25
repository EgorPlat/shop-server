import { Request } from 'express';
import { HelpJwtService } from 'src/help/token.service';
import { UserDocument } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
import { PostCommentDocument } from 'src/schemas/postComment.schema';
export declare class PostsService {
    private jwtHelpService;
    private userModel;
    private postCommentModel;
    constructor(jwtHelpService: HelpJwtService, userModel: Model<UserDocument>, postCommentModel: Model<PostCommentDocument>);
    addNewCommentToUserPost(request: Request): Promise<void>;
    getAllPostCommentsByPostId(request: Request): Promise<void>;
    getAllPostCommentsByPostIdPagination(request: Request): Promise<void>;
}
