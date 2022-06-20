import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class CheckService {
    constructor(private httpService: HttpService) {}

    async checkImageUrl(url: string) {
        try {
            const res = await this.httpService.get(url).toPromise();
            return true;
        }
        catch {
            return false;
        }
    }
}