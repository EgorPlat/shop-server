import { HttpException, Injectable } from '@nestjs/common';
import * as uuid from 'uuid';
import * as path from 'path';
import * as fs from 'fs';
import {Request} from 'express';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/schemas/user.schema';
import { UserService } from 'src/users/users.service';



@Injectable()
export class SettingsService {

    constructor(private userService: UserService, private jwtService: JwtService) {}

    async updateUserAvatar(file: any) {
        const fileName = uuid.v4() + '.jpg';
        const filePath = path.resolve(__dirname, '../../src/static');
        fs.readFile(filePath, (err, buffer) => console.log(buffer));
        /*if(!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath, {recursive: true});
        }
        fs.writeFileSync(path.join(filePath, fileName), file.buffer);*/
        throw new HttpException('Создано успешно!', 200);
    }
    async updateUserStatus(request: Request) {
        const BearerToken: any = request.headers.authorization;
        const token = BearerToken.split(' ')[1];
        const decodedToken: any = this.jwtService.decode(token);

        const updatedUser = await this.userService.updateUserStatus(decodedToken, request.body.status);
        throw new HttpException(updatedUser, 200);
    }
    async updateUserAccount(request: Request) {
        const BearerToken: any = request.headers.authorization;
        const token = BearerToken.split(' ')[1];
        const decodedToken: any = this.jwtService.decode(token);

        const updatedUser = await this.userService.updateUserAccount(decodedToken, request.body);
        throw new HttpException(updatedUser, 200);
    }
    async updateUserProfile(request: Request) {
        const BearerToken: any = request.headers.authorization;
        const token = BearerToken.split(' ')[1];
        const decodedToken: any = this.jwtService.decode(token);

        const updatedUser = await this.userService.updateUserProfile(decodedToken, request.body);
        throw new HttpException(updatedUser, 200);
    }
}
