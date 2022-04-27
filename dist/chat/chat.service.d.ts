import { Request } from 'express';
import { HelpJwtService } from 'src/help/token.service';
import { IMessage } from 'src/interfaces/chatMessage.interface';
import { Chat, ChatDocument } from 'src/schemas/chat.schema';
import { Model } from 'mongoose';
import { UserService } from 'src/users/users.service';
import { User } from 'src/schemas/user.schema';
export declare class ChatService {
    private userService;
    private helpJwtService;
    private chatModel;
    constructor(userService: UserService, helpJwtService: HelpJwtService, chatModel: Model<ChatDocument>);
    getMyDialogs(inithiator: User): Promise<(Chat & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    addNewMessage(inithiator: User, message: IMessage): Promise<IMessage[]>;
    getUserDialogs(request: Request): Promise<void>;
    startNewDialog(request: Request): Promise<void>;
}
