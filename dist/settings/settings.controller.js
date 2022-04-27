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
exports.SettingsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const settings_service_1 = require("./settings.service");
const multer_1 = require("multer");
let SettingsController = class SettingsController {
    constructor(settingsService) {
        this.settingsService = settingsService;
    }
    updateUserAvatar(file) {
        return this.settingsService.updateUserAvatar(file);
    }
    updateUserStatus(request) {
        return this.settingsService.updateUserStatus(request);
    }
    updateUserAccount(request) {
        return this.settingsService.updateUserAccount(request);
    }
    updateUserProfile(request) {
        return this.settingsService.updateUserProfile(request);
    }
};
__decorate([
    (0, common_1.Post)('/update-avatar'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('uploadedFile', {
        storage: (0, multer_1.diskStorage)({
            destination: './static',
            filename: (req, file, cb) => {
                const fileNameSplit = file.originalname.split('.');
                const fileExt = fileNameSplit[fileNameSplit.length - 1];
                cb(null, `${Date.now()}.${fileExt}`);
            }
        })
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SettingsController.prototype, "updateUserAvatar", null);
__decorate([
    (0, common_1.Post)('/update-status'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SettingsController.prototype, "updateUserStatus", null);
__decorate([
    (0, common_1.Post)('/update-account'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SettingsController.prototype, "updateUserAccount", null);
__decorate([
    (0, common_1.Post)('/update-profile'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SettingsController.prototype, "updateUserProfile", null);
SettingsController = __decorate([
    (0, common_1.Controller)('settings'),
    __metadata("design:paramtypes", [settings_service_1.SettingsService])
], SettingsController);
exports.SettingsController = SettingsController;
//# sourceMappingURL=settings.controller.js.map