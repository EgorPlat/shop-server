import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ProfileService {

    constructor(private jwtService: JwtService) {}
    
    async getMyProfile(request: Request) {
        try {
            const token: string = request.headers['Authorazation'];
            const decodedToken: string | { [key: string]: any; } = this.jwtService.decode(token);
            console.log(decodedToken);
            throw new HttpException(decodedToken, 200)
        } catch(e) {
            throw new HttpException('Невалидный токен. Обновите.', HttpStatus.UNAUTHORIZED)
        }
    }
}
