import { ChatService } from './chat.service';
import { Request } from 'express';
export declare class ChatController {
    private chatService;
    constructor(chatService: ChatService);
    sendNewMessage(request: Request): Promise<void>;
    startNewDialog(request: Request): Promise<void>;
    getUserDialogs(request: Request): Promise<void>;
}
