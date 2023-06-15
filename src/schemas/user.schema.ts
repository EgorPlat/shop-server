import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from 'mongoose';
export type UserDocument = User & Document;

@Schema()

export class User {                  
    @ApiProperty({example: '1', description: 'Уникальный ид'})
    @Prop()
    userId: string;

    @ApiProperty({example: 'Имя', description: 'Имя пользователя'})
    @Prop()
    firstName: string;

    @ApiProperty({example: 'Фамилия', description: 'Фамилия пользователя'})
    @Prop()
    secondName: string;

    @ApiProperty({example: '89693469999', description: 'Телефон пользователя'})
    @Prop({ default: '' })
    phoneNumber: string;

    @ApiProperty({example: 'sdfdf3r4341', description: 'Пароль'})
    @Prop({ default: 'password' })
    password: string;

    @ApiProperty({example: '2022-03-25T13:40:13.192+00:00', description: 'Дата регистрации пользователя'})
    @Prop({ default: new Date() })
    dateRegister: Date;

    @ApiProperty({example: '2022-03-25T13:40:13.192+00:00', description: 'Дата рождения пользователя'})
    @Prop({ default: new Date() })
    birthDate: Date;

    @ApiProperty({example: 'Строка', description: 'Город пользователя'})
    @Prop({ default: 'Секрет' })
    city: string;
};

export const UserSchema = SchemaFactory.createForClass(User);