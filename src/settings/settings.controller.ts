import { Body, Controller, Post, Request, UploadedFile } from '@nestjs/common';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {

    constructor(private settingsService: SettingsService) {}
    @Post('/update-avatar')
    updateUserAvatar(@Body() image: any) {
        return this.settingsService.updateUserAvatar(image);
    }
}
