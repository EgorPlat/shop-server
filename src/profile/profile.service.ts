import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UserService } from 'src/users/users.service';

@Injectable()
export class ProfileService {

    constructor(private jwtService: JwtService, private userService: UserService) {}
    
    async getMyProfile(request: Request) {
        const BearerToken: any = request.headers.authorization;
        const token = BearerToken.split(' ')[1];
        const decodedToken: any = this.jwtService.decode(token);

        const user = await this.userService.getUserByEmail(decodedToken.email);
        if(user) {
            throw new HttpException(user, 200)
        } else {
            throw new HttpException('Ошибка. Обновите токен.', HttpStatus.UNAUTHORIZED);
        }
    }
}
