import { CategoryService } from "./category.service";
import { Category } from "src/schemas/category.schema";
import { CreateCategoryDto } from "src/dto/create-category.dto";
export declare class CategoryController {
    private CategoryService;
    constructor(CategoryService: CategoryService);
    getCategorys(): Promise<(Category & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    addCategory(category: CreateCategoryDto): Promise<Category & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
