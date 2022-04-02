import { Body, Controller, Post, Request, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {

    constructor(private settingsService: SettingsService) {}
    @Post('/update-avatar')
    @UseInterceptors(FileInterceptor('uploadedFile', { dest: './update-avatar' }))
    updateUserAvatar(@UploadedFile() file) {
        return this.settingsService.updateUserAvatar(file);
    }
}
