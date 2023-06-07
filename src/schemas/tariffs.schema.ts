import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from 'mongoose';
export type TariffsDocument = Tariff & Document;

@Schema()

export class Tariff {                  
    @ApiProperty({example: 1, description: 'Уникальный ид'})
    @Prop()
    tariffId: number;

    @ApiProperty({example: "Годовой", description: 'Название тарифа'})
    @Prop()
    title: string;

    @ApiProperty({example: 1000, description: 'Стоимость тарифа'})
    @Prop()
    price: number;

    @ApiProperty({example: 10, description: 'Срок действия в месяцах'})
    @Prop()
    periodMonth: number;

    @ApiProperty({example: true, description: 'Айди доступных возможностей'})
    @Prop()
    opportunities: number[];
}
export const TariffSchema = SchemaFactory.createForClass(Tariff);