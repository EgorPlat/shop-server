import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { AppGateway } from 'src/app.gateway';
import { UserService } from 'src/users/users.service';
export declare class ProfileService {
    private jwtService;
    private userService;
    private socketServer;
    constructor(jwtService: JwtService, userService: UserService, socketServer: AppGateway);
    getMyProfile(request: Request): Promise<void>;
    getProfileByLogin(login: any): Promise<void>;
}
