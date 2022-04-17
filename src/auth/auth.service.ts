import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/schemas/user.schema';
import { UserService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwtService: JwtService) {}

    async login(userDto: UserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        const passwordEquals = user.password === userDto.password;
        
        if(user && passwordEquals) {
            const data = await this.generateToken(user);
            throw new HttpException(data, 200)
        } else {
            throw new HttpException('Неккоректные данные. Пожалуйста попробуйте снова.', HttpStatus.BAD_REQUEST);
        }
    }
    private async generateToken(user: User) {
        const payload = {email: user.email, name: user.name, city: user.city, avatar: user.avatar}
        return {
            auth: { token: this.jwtService.sign(payload) },
            profile: { user }
        }
    }
    async registration(userDto: CreateUserDto) {
        const condidate = await this.userService.getUserByEmail(userDto.email);
        if(condidate) {
            throw new HttpException('Пользователь с таким email уже есть.', HttpStatus.BAD_REQUEST);
        }
        const user = await this.userService.addUser(userDto);
        console.log(user);
        return this.generateToken(user);
    }
}
