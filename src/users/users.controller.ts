import { Controller, Get, Body, Post, UseGuards, Req } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { CreateUserDto } from "src/dto/create-user.dto";
import { ISortParams } from "src/interfaces/sort.params";
import { User } from "src/schemas/user.schema";
import { UserService } from "./users.service";
import { People } from "src/interfaces/people.interface";
import { Request } from "express";

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

    @ApiOperation({summary: 'Получить список пользователей'})
    @ApiResponse({status: 200, type: User})
    @Get('/getUserList')
    getUserList() {
        return this.userService.getUserList(); 
    }

    @ApiOperation({summary: 'Получить список сортированных пользователей'})
    @ApiResponse({status: 200, type: User})
    @Post('/getSortedUsers')
    getSortedPeoples(@Body() sortParams: ISortParams) {
        return this.userService.getSortedPeoples(sortParams); 
    }

    @ApiOperation({summary: 'Добавить новое мероприятие для пользователя'})
    @ApiResponse({status: 200, type: User})
    @Post('/addUserEvent')
    addUserEvent(@Req() request: Request) {
        return this.userService.addUserEvent(request); 
    }
}