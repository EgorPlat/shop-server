import { Request } from 'express';
import { PostsService } from './posts.service';
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    addNewCommentToUserPost(request: Request): Promise<void>;
    getAllPostCommentsByPostId(request: Request): Promise<void>;
    getAllPostCommentsByPostIdPagination(request: Request): Promise<void>;
}
