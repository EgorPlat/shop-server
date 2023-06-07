import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from 'mongoose';
export type TariffOpportunitiesDocument = TariffOpportunities & Document;

@Schema()

export class TariffOpportunities {                  
    @ApiProperty({example: 1, description: 'Уникальный ид'})
    @Prop()
    opportunitesId: number;

    @ApiProperty({example: "Смена фона профиля", description: 'Название тарифа'})
    @Prop()
    title: string;

    @ApiProperty({example: 'Дает возможность изменять фон вашего профиля', description: 'Описание возможности'})
    @Prop()
    description: string;

}
export const TariffOpportunitiesSchema = SchemaFactory.createForClass(TariffOpportunities);