import { AppService } from "./app.service";
export declare class AppController {
    private appService;
    constructor(appService: AppService);
    getUsers(): string;
    sendUsers(): string;
    headUsers(): string;
}
