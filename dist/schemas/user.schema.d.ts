/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
import { IPost } from "src/interfaces/post.interface";
export declare type UserDocument = User & Document;
export declare class User {
    userId: string;
    name: string;
    status: string;
    phoneNumber: string;
    email: string;
    password: string;
    gender: string;
    avatar: string;
    dateRegister: Date;
    login: number;
    birthDate: Date;
    city: string;
    age: number;
    events: string[];
    posts: IPost[];
}
export declare const UserSchema: import("mongoose").Schema<Document<User, any, any>, import("mongoose").Model<Document<User, any, any>, any, any, any>, {}, {}>;
