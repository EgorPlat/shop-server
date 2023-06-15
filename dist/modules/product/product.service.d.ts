/// <reference types="multer" />
import { Model } from 'mongoose';
import { HelpJwtService } from "src/help/token.service";
import { Request } from 'express';
import { Product, ProductDocument } from "src/schemas/product.schema";
export declare class ProductService {
    private productModel;
    private helpJwtService;
    constructor(productModel: Model<ProductDocument>, helpJwtService: HelpJwtService);
    addProduct(files: Array<Express.Multer.File>, request: Request): Promise<Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
