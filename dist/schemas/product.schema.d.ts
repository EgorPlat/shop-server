/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
import { ProductSpecification } from "src/interfaces/product.interface";
export declare type ProductDocument = Product & Document;
export declare class Product {
    productId: number;
    articleNumber: string;
    title: string;
    categorysId: number[];
    images: string[];
    specifications: ProductSpecification[];
    stockNumber: number;
}
export declare const ProductSchema: import("mongoose").Schema<Document<Product, any, any>, import("mongoose").Model<Document<Product, any, any>, any, any, any>, {}, {}>;
