import { HttpService } from '@nestjs/axios';
export declare class CheckService {
    private httpService;
    constructor(httpService: HttpService);
    checkImageUrl(url: string): Promise<boolean>;
}
