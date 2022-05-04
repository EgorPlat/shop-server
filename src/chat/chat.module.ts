import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HelpJwtModule } from 'src/help/token.module';
import { Chat, ChatSchema } from 'src/schemas/chat.schema';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { UsersModule } from 'src/users/users.module';
import { AppGateway } from 'src/app.gateway';
@Module({
  controllers: [ChatController],
  providers: [ChatService, AppGateway],
  imports: [UsersModule, HelpJwtModule, MongooseModule.forFeature([{name: Chat.name, schema: ChatSchema}])]
})
export class ChatModule {}
