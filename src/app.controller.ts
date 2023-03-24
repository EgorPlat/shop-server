import { Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller('/')
export class AppController {

    constructor(private appService: AppService) {}

    @Get()
    getUsers() {
        return this.appService.getUsers();
    }
    @Post()
    sendUsers() {
        return this.appService.sendUsers();
    }
}

// Controller-ы в Нест служат для обработки поступающих
// на сервер запросов, тут указываем тип запроса и вызываем
// метод обработки запроса из сервиса