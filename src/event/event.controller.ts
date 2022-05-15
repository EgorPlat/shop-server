import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { EventService } from './event.service';
import { Request } from '@nestjs/common';
@Controller('event')
export class EventController {

    constructor(private eventService: EventService) {}

    @Post('/getEventsCategory')
    getEventsCategory(@Request() request) {
        return this.eventService.getEventsCategory(request.body)
    }
}
