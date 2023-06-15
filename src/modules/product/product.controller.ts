import { Body, Controller, Get, Post, Req, UploadedFiles, UseGuards, UseInterceptors } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/modules/auth/jwt-auth.guard";
import { ProductService } from "./product.service";
import { Request } from 'express';
import { AnyFilesInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

@ApiTags('Товары')
@Controller('/product')
export class ProductController {

    constructor(private ProductService: ProductService) {}

    @ApiOperation({summary: 'Добавить товар'})
    //@UseGuards(JwtAuthGuard)
    @Post('/addProduct')
    @UseInterceptors(AnyFilesInterceptor({
        storage: diskStorage(
            {
                destination: './src/static',
                filename: (req, file, cb) => {
                    const fileNameSplit = file.originalname.split('.');
                    const fileExt = fileNameSplit[fileNameSplit.length - 1];
                    cb(null, `${Date.now()}.${fileExt}`);
                }
            }
        )
    }))
    addProduct(@UploadedFiles() files: Array<Express.Multer.File>, @Req() request: Request) {
        return this.ProductService.addProduct(files, request); 
    }

}