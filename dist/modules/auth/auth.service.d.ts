import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UserDto } from 'src/dto/user.dto';
import { UserService } from 'src/modules/users/users.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(userDto: UserDto): Promise<void>;
    private generateToken;
    registration(userDto: CreateUserDto): Promise<void>;
}
