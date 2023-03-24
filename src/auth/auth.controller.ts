import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AcceptUserDto } from 'src/dto/accept-user.dto';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UserDto } from 'src/dto/user.dto';
import { AuthService } from './auth.service';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/login')
    login(@Body() userDto: UserDto) {
        return this.authService.login(userDto);
    }
    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto);
    }
    @Post('/registrationWithConfirmation')
    registrationWithConfirmation(@Body() userDto: CreateUserDto) {
        return this.authService.registrationWithConfirmation(userDto);
    }
    @Post('/acceptUserAccount')
    acceptUserAccount(@Body() userDto: AcceptUserDto) {
        return this.authService.acceptUserAccount(userDto);
    }
}
