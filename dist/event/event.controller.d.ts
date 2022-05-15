import { EventService } from './event.service';
export declare class EventController {
    private eventService;
    constructor(eventService: EventService);
    getEventsCategory(request: any): Promise<any>;
}
