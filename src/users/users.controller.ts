import { Controller, Get, Body, Post, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { CreateUserDto } from "src/dto/create-user.dto";
import { User } from "src/schemas/user.schema";
import { UserService } from "./users.service";

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

    @ApiOperation({summary: 'Создать пользователя'})
    @ApiResponse({status: 200, type: User})
    @Post()
    addUser(@Body() userDto: CreateUserDto) {
        return this.userService.addUser(userDto); 
    }

    @ApiOperation({summary: 'Получить пользователя'})
    @ApiResponse({status: 200, type: User})
    @Post('/getUserByLogin')
    getUserByLogin(@Body() login: string) {
        return this.userService.getUserByLogin(login); 
    }
}