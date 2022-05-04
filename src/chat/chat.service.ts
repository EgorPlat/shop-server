import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { HelpJwtService } from 'src/help/token.service';
import { IMessage } from 'src/interfaces/chatMessage.interface';
import { Chat, ChatDocument } from 'src/schemas/chat.schema';
import { Model } from 'mongoose';
import { UserService } from 'src/users/users.service';
import { CreateChatDto } from 'src/dto/create-chat.dto';
import { User } from 'src/schemas/user.schema';
import { AppGateway } from 'src/app.gateway';

@Injectable()
export class ChatService {

    constructor(
        private userService: UserService, 
        private helpJwtService: HelpJwtService, 
        @InjectModel(Chat.name) private chatModel: Model<ChatDocument>,
        private socketServer: AppGateway
    ) {}
    
    async getMyDialogs(inithiator: User) {
        const myDialogs = await this.chatModel.find({firstUserId: inithiator.userId});
        return myDialogs;
    }
    async addNewMessage(inithiator: User, message: IMessage) {
        const prevChatState = await this.chatModel.findOne({dialogId: message.dialogId});
        await this.chatModel.updateOne({dialogId: message.dialogId}, {$set: {
            messages: [...prevChatState.messages, message]
        }});
        const currentChatState = await this.chatModel.findOne({dialogId: message.dialogId});
        this.socketServer.server.emit('message', `Вам пришло новое сообщение в диалоге ${message.dialogId}`)
        return currentChatState.messages;
    }
    // Все обработчики роутов ниже
    async getDialogMessages(request: Request) {
        const dialog: Chat = await this.chatModel.findOne({dialogId: request.body.dialogId});
        const messages = dialog.messages;
        throw new HttpException(messages, 200);
    }
    async sendNewMessage(request: Request) {
        const decodedJwt = await this.helpJwtService.decodeJwt(request);
        const inithiator: User = await this.userService.getUserByEmail(decodedJwt.email);
        const message: IMessage = {
            dialogId: request.body.dialogId,
            content: request.body.content,
            messageId: String(Math.floor(Math.random()*5000000)),
            sendAt: String(new Date()),
            senderId: inithiator.userId,
            isRead: false,
            avatar: inithiator.avatar,
            senderName: inithiator.name,
            status: false
        }
        const updatedMessages = await this.addNewMessage(inithiator, message);
        throw new HttpException(updatedMessages, 200);
    }
    async getUserDialogs(request: Request) {
        const decodedJwt = await this.helpJwtService.decodeJwt(request);
        const inithiator: User = await this.userService.getUserByEmail(decodedJwt.email);
        const findedDialogs = await this.getMyDialogs(inithiator);
        
        const shortDialogsForUser = await Promise.all(findedDialogs.map( async (eachDialog) => {
            const firstUser: User = await this.userService.getUserByUserId(eachDialog.firstUserId)
            const secondUser: User = await this.userService.getUserByUserId(eachDialog.secondUserId)
            if(inithiator.userId === eachDialog.firstUserId) {
                return {
                    dialogId: eachDialog.dialogId,
                    userName: secondUser.name,
                    userAvatar: secondUser.avatar,
                    isRead: true,
                    content: eachDialog.messages[0].content,
                    messages: eachDialog.messages
                }
            } else {
                return {
                    dialogId: eachDialog.dialogId,
                    userName: eachDialog.firstUserId,
                    userAvatar: firstUser.avatar,
                    isRead: true,
                    content: eachDialog.messages[0].content,
                    messages: eachDialog.messages
                } 
            }
        }))
        
        throw new HttpException(shortDialogsForUser, 200);
    }
    async startNewDialog(request: Request) {
        const createChatDto: CreateChatDto = request.body;
        const decodedJwt = await this.helpJwtService.decodeJwt(request);
        const inithiator: User = await this.userService.getUserByEmail(decodedJwt.email);
        
        const newDialogId: string = String(Math.floor(Math.random()*1000000));
        await this.chatModel.create({dialogId: "dialog" + newDialogId, messages: [], firstUserId: inithiator.userId, secondUserId: createChatDto.userId});
        
        const createdChat = await this.chatModel.findOne({dialogId: "dialog"+newDialogId});
        const message: IMessage = {
            dialogId: createdChat.dialogId,
            content: createChatDto.messageContent,
            messageId: String(Math.floor(Math.random()*5000000)),
            sendAt: String(new Date()),
            senderId: inithiator.userId,
            isRead: false,
            avatar: inithiator.avatar,
            senderName: inithiator.name,
            status: false
        }
        const updatedDialogMessages = await this.addNewMessage(inithiator, message);
        throw new HttpException(updatedDialogMessages, 200);
    }
}
