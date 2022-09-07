import { HttpService } from '@nestjs/axios';
import { IEventsInfo } from 'src/interfaces/events.interface';
import { CheckService } from 'src/help/ckeck.service';
export declare class EventService {
    private httpService;
    private checkService;
    constructor(httpService: HttpService, checkService: CheckService);
    getEventsByCategory(eventsInfo: IEventsInfo): Promise<any[]>;
    getEventInfoById(eventId: string | number): Promise<any>;
}
