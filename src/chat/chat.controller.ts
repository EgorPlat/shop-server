import { Controller, Get, Post, Req } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Request } from 'express';

@Controller('chat')
export class ChatController {

    constructor(private chatService: ChatService) {}

    @Post('/send-message')
    sendNewMessage(@Req() request: Request) {
        return this.chatService.sendNewMessage(request);
    }
    @Post('/messages')
    getDialogMessages(@Req() request: Request) {
        return this.chatService.getDialogMessages(request);
    }
    @Post('/start-dialog')
    startNewDialog(@Req() request: Request) {
        return this.chatService.startNewDialog(request);
    }
    @Get('/my-dialogs')
    getUserDialogs(@Req() request: Request) {
        return this.chatService.getUserDialogs(request);
    }
}
