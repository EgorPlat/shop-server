import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
export declare class HelpJwtService {
    private jwtService;
    constructor(jwtService: JwtService);
    decodeJwt(request: Request): any;
    decodeJwtFromString(token: string): any;
}
