import { CreateUserDto } from 'src/dto/create-user.dto';
import { UserDto } from 'src/dto/user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(userDto: UserDto): Promise<{
        auth: {
            token: string;
        };
        profile: {
            user: import("../schemas/user.schema").User;
        };
    }>;
    registration(userDto: CreateUserDto): Promise<{
        auth: {
            token: string;
        };
        profile: {
            user: import("../schemas/user.schema").User;
        };
    }>;
}
