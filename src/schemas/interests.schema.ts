import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from 'mongoose';
export type InterestDocument = Interest & Document;

@Schema()

export class Interest {                  
    @ApiProperty({example: '1', description: 'Уникальный ид'})
    @Prop()
    interestId: string;

    @ApiProperty({example: "", description: 'Название'})
    @Prop()
    title: string;
}
export const InterestSchema = SchemaFactory.createForClass(Interest);