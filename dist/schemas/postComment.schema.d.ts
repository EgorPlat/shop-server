/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type PostCommentDocument = PostComment & Document;
export declare class PostComment {
    commentId: string;
    postId: string;
    postOwnerId: string;
    commentOwnerId: string;
    text: string;
    date: Date;
    commentOwnerAvatar: string;
    commentOwnerName: string;
    commentOwnerLogin: number;
}
export declare const PostCommentSchema: import("mongoose").Schema<Document<PostComment, any, any>, import("mongoose").Model<Document<PostComment, any, any>, any, any, any>, {}, {}>;
