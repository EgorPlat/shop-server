import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from 'mongoose';
import { ProductSpecification } from "src/interfaces/product.interface";

export type ProductDocument = Product & Document;

@Schema()

export class Product {                  
    @ApiProperty({example: 1, description: 'Уникальный ид'})
    @Prop()
    productId: number;

    @ApiProperty({example: '4902-20', description: 'Уникальный ид'})
    @Prop()
    articleNumber: string;

    @ApiProperty({example: 'Торс', description: 'Название категории'})
    @Prop()
    title: string;

    @ApiProperty({example: [2, 3, 4], description: 'Категории'})
    @Prop()
    categorysId: number[];

    @ApiProperty({example: ['/product.png', '/product1.png'], description: 'Изображения'})
    @Prop()
    images: string[];

    @ApiProperty({example: [], description: 'Характеристики'})
    @Prop()
    specifications: ProductSpecification[];

    @ApiProperty({example: 5, description: 'Остаток на складе'})
    @Prop()
    stockNumber: number;
};

export const ProductSchema = SchemaFactory.createForClass(Product);