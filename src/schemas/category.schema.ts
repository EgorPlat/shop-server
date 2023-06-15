import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()

export class Category {                  
    @ApiProperty({example: 1, description: 'Уникальный ид'})
    @Prop()
    categoryId: number;

    @ApiProperty({example: 'Торс', description: 'Название категории'})
    @Prop()
    title: string;

    @ApiProperty({example: [2, 3, 4], description: 'Подкатегории'})
    @Prop()
    subCategorysId: number[];
};

export const CategorySchema = SchemaFactory.createForClass(Category);