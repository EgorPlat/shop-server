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
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const chat_service_1 = require("./chat.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let ChatController = class ChatController {
    constructor(chatService) {
        this.chatService = chatService;
    }
    updateUserAvatar(file, request) {
        return this.chatService.sendFileToChat(file, request);
    }
    sendNewMessage(request) {
        return this.chatService.sendNewMessage(request);
    }
    getDialogMessages(request) {
        return this.chatService.getDialogMessages(request);
    }
    startNewDialog(request) {
        return this.chatService.startNewDialog(request);
    }
    getUserDialogs(request) {
        return this.chatService.getUserDialogs(request);
    }
    checkDialog(request) {
        return this.chatService.checkDialog(request);
    }
};
__decorate([
    (0, common_1.Post)('/send-file-to-chat'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('uploadedFile', {
        storage: (0, multer_1.diskStorage)({
            destination: './src/static',
            filename: (req, file, cb) => {
                const fileNameSplit = file.originalname.split('.');
                const fileExt = fileNameSplit[fileNameSplit.length - 1];
                cb(null, `${Date.now()}.${fileExt}`);
            }
        })
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "updateUserAvatar", null);
__decorate([
    (0, common_1.Post)('/send-message'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "sendNewMessage", null);
__decorate([
    (0, common_1.Post)('/messages'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "getDialogMessages", null);
__decorate([
    (0, common_1.Post)('/start-dialog'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "startNewDialog", null);
__decorate([
    (0, common_1.Get)('/my-dialogs'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "getUserDialogs", null);
__decorate([
    (0, common_1.Post)('/check-dialog'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "checkDialog", null);
ChatController = __decorate([
    (0, common_1.Controller)('chat'),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatController);
exports.ChatController = ChatController;
//# sourceMappingURL=chat.controller.js.map