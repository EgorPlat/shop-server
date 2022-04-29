"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const token_service_1 = require("../help/token.service");
const chat_schema_1 = require("../schemas/chat.schema");
const mongoose_2 = require("mongoose");
const users_service_1 = require("../users/users.service");
let ChatService = class ChatService {
    constructor(userService, helpJwtService, chatModel) {
        this.userService = userService;
        this.helpJwtService = helpJwtService;
        this.chatModel = chatModel;
    }
    async getMyDialogs(inithiator) {
        const myDialogs = await this.chatModel.find({ firstUserId: inithiator.userId });
        return myDialogs;
    }
    async addNewMessage(inithiator, message) {
        const prevChatState = await this.chatModel.findOne({ dialogId: message.dialogId });
        await this.chatModel.updateOne({ dialogId: message.dialogId }, { $set: {
                messages: [...prevChatState.messages, message]
            } });
        const currentChatState = await this.chatModel.findOne({ dialogId: message.dialogId });
        return currentChatState.messages;
    }
    async getUserDialogs(request) {
        const decodedJwt = await this.helpJwtService.decodeJwt(request);
        const inithiator = await this.userService.getUserByEmail(decodedJwt.email);
        const findedDialogs = await this.getMyDialogs(inithiator);
        const shortDialogsForUser = await Promise.all(findedDialogs.map(async (eachDialog) => {
            const firstUser = await this.userService.getUserByUserId(eachDialog.firstUserId);
            const secondUser = await this.userService.getUserByUserId(eachDialog.secondUserId);
            if (inithiator.userId === eachDialog.firstUserId) {
                return {
                    dialogId: eachDialog.dialogId,
                    userName: secondUser.name,
                    userAvatar: secondUser.avatar,
                    isRead: true,
                    content: eachDialog.messages[0]
                };
            }
            else {
                return {
                    dialogId: eachDialog.dialogId,
                    userName: eachDialog.firstUserId,
                    userAvatar: firstUser.avatar,
                    isRead: true,
                    content: eachDialog.messages[0]
                };
            }
        }));
        throw new common_1.HttpException(shortDialogsForUser, 200);
    }
    async startNewDialog(request) {
        const createChatDto = request.body;
        const decodedJwt = await this.helpJwtService.decodeJwt(request);
        const inithiator = await this.userService.getUserByEmail(decodedJwt.email);
        const newDialogId = String(Math.floor(Math.random() * 1000000));
        await this.chatModel.create({ dialogId: "dialog" + newDialogId, messages: [], firstUserId: inithiator.userId, secondUserId: createChatDto.userId });
        const createdChat = await this.chatModel.findOne({ dialogId: "dialog" + newDialogId });
        const message = {
            dialogId: createdChat.dialogId,
            content: createChatDto.messageContent,
            messageId: String(Math.floor(Math.random() * 5000000)),
            sendAt: String(new Date()),
            senderId: inithiator.userId,
            isRead: false,
            avatar: inithiator.avatar,
            senderName: inithiator.name,
            status: false
        };
        const updatedDialogMessages = await this.addNewMessage(inithiator, message);
        throw new common_1.HttpException(updatedDialogMessages, 200);
    }
};
ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, mongoose_1.InjectModel)(chat_schema_1.Chat.name)),
    __metadata("design:paramtypes", [users_service_1.UserService, token_service_1.HelpJwtService, mongoose_2.Model])
], ChatService);
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map