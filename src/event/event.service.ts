import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { IEventsInfo } from 'src/interfaces/events.interface';

@Injectable()
export class EventService {

    constructor(private httpService: HttpService) {}

    async getEventsCategory(eventsInfo: IEventsInfo) {
        const {data} = await this.httpService.get(
            `https://kudago.com/public-api/v1.4/events/?page=${eventsInfo.page}&page_size=75`
        ).toPromise();
        if(data) {
            throw new HttpException(data, 200);
        } else {
            throw new HttpException('Ничего не найдено', 404);
        }
    }
}
