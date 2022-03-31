import { Controller, Post, Request, UploadedFile } from '@nestjs/common';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {

    constructor(private settingsService: SettingsService) {}
    @Post('/update-avatar')
    updateUserAvatar(@UploadedFile() image) {
        return this.settingsService.updateUserAvatar(image);
    }
}
