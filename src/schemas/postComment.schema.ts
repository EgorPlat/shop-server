import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from 'mongoose';
export type PostCommentDocument = PostComment & Document;

@Schema()

export class PostComment {
    @ApiProperty({example: '1', description: 'Уникальный comment ид'})
    @Prop()
    commentId: string;

    @ApiProperty({example: '1', description: 'Уникальный post ид'})
    @Prop()
    postId: string;

    @ApiProperty({example: 'postOwnerId', description: 'Айди пользователя создателя поста'})
    @Prop()
    postOwnerId: string;

    @ApiProperty({example: 'commentOwnerId', description: 'Айди пользователя создателя комментария'})
    @Prop()
    commentOwnerId: string;

    @ApiProperty({example: 'text', description: 'Текст комментария'})
    @Prop()
    text: string;

    @ApiProperty({example: 'text', description: 'Дата комментария'})
    @Prop({ default: new Date() })
    date: Date;

    @ApiProperty({example: 'text', description: 'Имя пользтвателя у комментария'})
    @Prop()
    commentOwnerAvatar: string;

    @ApiProperty({example: 'text', description: 'Аватар пользователя у комментария'})
    @Prop()
    commentOwnerName: string;
}
export const PostCommentSchema = SchemaFactory.createForClass(PostComment);