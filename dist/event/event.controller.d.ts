import { EventService } from './event.service';
export declare class EventController {
    private eventService;
    constructor(eventService: EventService);
    getEventsByCategory(request: any): Promise<any>;
    getEventInfoById(request: any): Promise<any>;
}
