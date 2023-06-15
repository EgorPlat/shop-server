import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { HelpJwtService } from "src/help/token.service";
import { Request } from 'express';
import { Category, CategoryDocument } from "src/schemas/category.schema";
import { CreateCategoryDto } from "src/dto/create-category.dto";

@Injectable()
export class CategoryService {

    constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>, private helpJwtService: HelpJwtService){}

    async getCategorys() {
        const categorys = await this.categoryModel.find({}, {
            _id: false,
            __v: false
        });
        return categorys;
    }

    async addCategory(dto: CreateCategoryDto) {
        let newCategory = {
            ...dto, 
            categoryId: Math.floor(Math.random()*20000),
        }
        const category = await this.categoryModel.create(newCategory);
        if(category) { 
            return category;
        }
    }
}