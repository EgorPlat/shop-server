import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UserDto } from 'src/dto/user.dto';
import { UserService } from 'src/modules/users/users.service';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService, 
        private jwtService: JwtService,
    ) {}

    async login(userDto: UserDto) {
        const user = await this.userService.getUserByPhone(userDto.phone);
        
        if(user) {
            const passwordEquals = user.password === userDto.password;
            if(passwordEquals && user.password) {
                const data = await this.generateToken(user);
                throw new HttpException(data, 200)
            } else {
                throw new HttpException({message: 'Неккоректные данные. Пожалуйста попробуйте снова.'}, 400);
            }
        } else {
            throw new HttpException({message: 'Запрашиваемый пользователь не найден. Пожалуйста попробуйте снова.'}, 404);
        }
    }
    private async generateToken(user: User) {
        const payload = {   
            phone: user.phoneNumber, 
            name: user.firstName, 
            city: user.city, 
            userId: user.userId
        }
        return {
            auth: { token: this.jwtService.sign(payload, { expiresIn: '1h' }) },
            profile: { user }
        }
    }
    async registration(userDto: CreateUserDto) {
        const condidate = await this.userService.getUserByPhone(userDto.phoneNumber);
        if(condidate) {
            throw new HttpException('Пользователь с таким email уже есть.', HttpStatus.BAD_REQUEST);
        }
        const user = await this.userService.addUser(userDto);
        const userWithTokens = await this.generateToken(user);
        throw new HttpException(userWithTokens, 201);
    }
}
