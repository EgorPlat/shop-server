import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { AuthModule } from 'src/modules/auth/auth.module';
import { UsersModule } from 'src/modules/users/users.module';
import { AppGateway } from 'src/app.gateway';
import { HelpJwtModule } from 'src/help/token.module';
import { PostsService } from './posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';
import { PostComment, PostCommentSchema } from 'src/schemas/postComment.schema';

@Module({
  providers: [PostsService, AppGateway],
  controllers: [PostsController],
  imports: [
    AuthModule,
    UsersModule,
    HelpJwtModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: PostComment.name, schema: PostCommentSchema },
    ]),
  ],
})
export class PostsModule {}
