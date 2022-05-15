import { HttpService } from '@nestjs/axios';
import { IEventsInfo } from 'src/interfaces/events.interface';
export declare class EventService {
    private httpService;
    constructor(httpService: HttpService);
    getEventsCategory(eventsInfo: IEventsInfo): Promise<any>;
}
