import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/users/users.service';
export declare class SettingsService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    updateUserAvatar(file: any): Promise<void>;
    updateUserStatus(request: Request): Promise<void>;
    updateUserAccount(request: Request): Promise<void>;
    updateUserProfile(request: Request): Promise<void>;
}
