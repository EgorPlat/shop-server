/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type TariffsDocument = Tariff & Document;
export declare class Tariff {
    tariffId: number;
    title: string;
    price: number;
    periodMonth: number;
    opportunities: number[];
}
export declare const TariffSchema: import("mongoose").Schema<Document<Tariff, any, any>, import("mongoose").Model<Document<Tariff, any, any>, any, any, any>, {}, {}>;
