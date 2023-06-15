/// <reference types="multer" />
import { ProductService } from "./product.service";
import { Request } from 'express';
export declare class ProductController {
    private ProductService;
    constructor(ProductService: ProductService);
    addProduct(files: Array<Express.Multer.File>, request: Request): Promise<import("../../schemas/product.schema").Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
