/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type UnConfirmedUserDocument = UnConfirmedUser & Document;
export declare class UnConfirmedUser {
    name: string;
    email: string;
    password: string;
    gender: string;
    city: string;
    actualCodeForConfirmation: number;
}
export declare const UnConfirmedUserSchema: import("mongoose").Schema<Document<UnConfirmedUser, any, any>, import("mongoose").Model<Document<UnConfirmedUser, any, any>, any, any, any>, {}, {}>;
