import { ProfileService } from './profile.service';
import { Request } from 'express';
export declare class ProfileController {
    private profileService;
    constructor(profileService: ProfileService);
    getMyProfile(request: Request): Promise<void>;
    getProfileByLogin(login: any): Promise<void>;
}
