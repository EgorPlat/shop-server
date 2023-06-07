/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type TariffOpportunitiesDocument = TariffOpportunities & Document;
export declare class TariffOpportunities {
    opportunitesId: number;
    title: string;
    description: string;
}
export declare const TariffOpportunitiesSchema: import("mongoose").Schema<Document<TariffOpportunities, any, any>, import("mongoose").Model<Document<TariffOpportunities, any, any>, any, any, any>, {}, {}>;
