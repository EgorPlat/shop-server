import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/modules/auth/jwt-auth.guard";
import { CategoryService } from "./category.service";
import { Category } from "src/schemas/category.schema";
import { Request } from 'express';
import { CreateCategoryDto } from "src/dto/create-category.dto";

@ApiTags('Категории')
@Controller('/category')
export class CategoryController {

    constructor(private CategoryService: CategoryService) {}

    @ApiOperation({summary: 'Список категорий'})
    //@UseGuards(JwtAuthGuard)
    @Get('/getCategorys')
    getCategorys() {
        return this.CategoryService.getCategorys(); 
    }

    @ApiOperation({summary: 'Добавить категорию'})
    //@UseGuards(JwtAuthGuard)
    @Post('/addCategory')
    addCategory(@Body() category: CreateCategoryDto) {
        return this.CategoryService.addCategory(category); 
    }
}