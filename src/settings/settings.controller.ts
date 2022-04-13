import { Body, Controller, Post, Req, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SettingsService } from './settings.service';
import {Request} from 'express';

@Controller('settings')
export class SettingsController {

    constructor(private settingsService: SettingsService) {}
    @Post('/update-avatar')
    @UseInterceptors(FileInterceptor('uploadedFile', { dest: './update-avatar' }))
    updateUserAvatar(@UploadedFile() file) {
        return this.settingsService.updateUserAvatar(file);
    }

    @Post('/update-status')
    updateUserStatus(@Req() request: Request) {
        return this.settingsService.updateUserStatus(request);
    }
    @Post('/update-account')
    updateUserAccount(@Req() request: Request) {
        return this.settingsService.updateUserAccount(request);
    }
    @Post('/update-profile')
    updateUserProfile(@Req() request: Request) {
        return this.settingsService.updateUserProfile(request);
    }
}
