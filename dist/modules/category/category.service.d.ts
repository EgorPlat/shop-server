import { Model } from 'mongoose';
import { HelpJwtService } from "src/help/token.service";
import { Category, CategoryDocument } from "src/schemas/category.schema";
import { CreateCategoryDto } from "src/dto/create-category.dto";
export declare class CategoryService {
    private categoryModel;
    private helpJwtService;
    constructor(categoryModel: Model<CategoryDocument>, helpJwtService: HelpJwtService);
    getCategorys(): Promise<(Category & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    addCategory(dto: CreateCategoryDto): Promise<Category & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
