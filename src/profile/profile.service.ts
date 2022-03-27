import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class ProfileService {

    constructor(private jwtService: JwtService) {}
    
    async getMyProfile(request: Request) {
        try {
            const BearerToken: any = request.headers.authorization;
            const token = BearerToken.split(' ')[1];
            //const decodedToken = this.jwtService.decode(token);
            //console.log(request.headers);
            console.log(token);
            //console.log(decodedToken);
            throw new HttpException('Gotovo', 200)
        } catch(e) {
            throw new HttpException('Невалидный токен. Обновите.', HttpStatus.UNAUTHORIZED)
        }
    }
}
