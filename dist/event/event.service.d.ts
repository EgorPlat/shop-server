import { HttpService } from '@nestjs/axios';
import { IEventsInfo } from 'src/interfaces/events.interface';
export declare class EventService {
    private httpService;
    constructor(httpService: HttpService);
    getEventsByCategory(eventsInfo: IEventsInfo): Promise<any>;
    getEventInfoById(eventId: number): Promise<void>;
}
