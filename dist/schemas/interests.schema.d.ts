/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type InterestDocument = Interest & Document;
export declare class Interest {
    interestId: string;
    title: string;
}
export declare const InterestSchema: import("mongoose").Schema<Document<Interest, any, any>, import("mongoose").Model<Document<Interest, any, any>, any, any, any>, {}, {}>;
