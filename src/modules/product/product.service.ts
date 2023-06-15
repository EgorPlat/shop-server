import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { HelpJwtService } from "src/help/token.service";
import { Request } from 'express';
import { Product, ProductDocument } from "src/schemas/product.schema";

@Injectable()
export class ProductService {

    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>, private helpJwtService: HelpJwtService){}

    async addProduct(files: Array<Express.Multer.File>, request: Request) {
        const newItem = {
            productId: Math.floor(Math.random()*10000000),
            articleNumber: request.body.articleNumber,
            title: request.body.title,
            categorysId: request.body.categorysId,
            images: files,
            specifications: request.body.specifications,
            stockNumber: request.body.stockNumber
        };
        
        const product = await this.productModel.create(newItem);
        if(product) { 
            return product;
        }
    }
}