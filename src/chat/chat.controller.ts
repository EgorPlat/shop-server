import { Controller, Get, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('chat')
export class ChatController {

    constructor(private chatService: ChatService) {}

    @Post('/send-file-to-chat')
    @UseInterceptors(FileInterceptor('uploadedFile',{     
    storage: diskStorage(
        {
            destination: './src/static',
            filename: (req, file, cb) => {
                const fileNameSplit = file.originalname.split('.');
                const fileExt = fileNameSplit[fileNameSplit.length - 1];
                cb(null, `${Date.now()}.${fileExt}`);
            }
        }
    )
    }))
    updateUserAvatar(@UploadedFile() file, @Req() request: Request) {
        return this.chatService.sendFileToChat(file, request);
    }
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
    @Post('/check-dialog')
    checkDialog(@Req() request: Request) {
        return this.chatService.checkDialog(request);
    }
}
