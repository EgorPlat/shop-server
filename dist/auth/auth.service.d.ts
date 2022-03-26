import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/schemas/user.schema';
import { UserService } from 'src/users/users.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(userDto: UserDto): Promise<{
        auth: {
            token: string;
        };
        profile: {
            user: User;
        };
    }>;
    private generateToken;
    registration(userDto: CreateUserDto): Promise<{
        auth: {
            token: string;
        };
        profile: {
            user: User;
        };
    }>;
}
