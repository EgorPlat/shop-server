import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
export declare class HelpJwt {
    private jwtService;
    constructor(jwtService: JwtService);
    decodeJwt(request: Request): any;
}
