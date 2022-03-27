import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class ProfileService {

    constructor(private jwtService: JwtService) {}
    
    async getMyProfile(request: Request) {
        try {
            const token: any = request.headers['authorazation'];
            const decodedToken: string | { [key: string]: any; } = this.jwtService.decode(token);
            console.log(request.headers);
            console.log(token);
            console.log(decodedToken);
            throw new HttpException(decodedToken, 200)
        } catch(e) {
            throw new HttpException('Невалидный токен. Обновите.', HttpStatus.UNAUTHORIZED)
        }
    }
}