import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/modules/auth/jwt-auth.guard";
import { UserService } from "./users.service";
import { User } from "src/schemas/user.schema";

@ApiTags('Пользователи')
@Controller('/users')
export class UserController {

    constructor(private userService: UserService) {}

    @ApiOperation({summary: 'Список пользователей'})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(JwtAuthGuard)
    @Get()
    getUsers() {
        return this.userService.getUsers(); 
    }
}