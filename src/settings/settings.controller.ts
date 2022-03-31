import { Controller, Post, Request } from '@nestjs/common';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {

    constructor(private settingsService: SettingsService) {}
    @Post('/update-avatar')
    updateUserAvatar(req: Request) {
        return this.settingsService.updateUserAvatar(req);
    }
}
