import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { IEventsInfo } from 'src/interfaces/events.interface';
import { CheckService } from 'src/help/ckeck.service';
import { lastValueFrom }  from 'rxjs';
@Injectable()
export class EventService {

    constructor(private httpService: HttpService, private checkService: CheckService) {}

    async getEventsByCategory(eventsInfo: IEventsInfo) {
        const {data} = await this.httpService.get(
            `https://kudago.com/public-api/v1.4/events/?page=${eventsInfo.page}&page_size=15&categories=${eventsInfo.nameCategory}&fields=id,title,description,price,images,age_restriction`
        ).toPromise();
        if(data) {
            let newData = [];
            for(let i = 0; i < data.results.length; i++) {
                const res = await lastValueFrom(this.httpService.get(`${data.results[i].images[0].image}`)).catch(() => {
                    return null;
                })
                if(res) {
                    newData = [...newData, data.results[i]];
                }
            }
            return newData;
        } else {
            throw new HttpException('Ничего не найдено', 404);
        }
    }
    async getEventInfoById(eventId: number) {
        const {data} = await this.httpService.get(
            `https://kudago.com/public-api/v1.4/events/${eventId}`
        ).toPromise();
        if(data) {
            return data;
        } else {
            throw new HttpException('Ничего не найдено', 404);
        }
    }
}
