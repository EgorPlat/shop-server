import { AcceptUserDto } from 'src/dto/accept-user.dto';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UserDto } from 'src/dto/user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(userDto: UserDto): Promise<void>;
    registration(userDto: CreateUserDto): Promise<void>;
    registrationWithConfirmation(userDto: CreateUserDto): Promise<void>;
    acceptUserAccount(userDto: AcceptUserDto): Promise<void>;
}
