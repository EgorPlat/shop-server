import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller('/api')
export class AppController {

    constructor(private appService: AppService) {}

    @Get()
    getUsers() {
        return this.appService.getUsers();
    }
}

// Controller-ы в Нест служат для обработки поступающих
// на сервер запросов, тут указываем тип запроса и вызываем
// метод обработки запроса из сервиса