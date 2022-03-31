import { SettingsService } from './settings.service';
export declare class SettingsController {
    private settingsService;
    constructor(settingsService: SettingsService);
    updateUserAvatar(req: Request): Promise<void>;
}
