import { HttpService } from '@nestjs/axios';
import { IEventsInfo } from 'src/interfaces/events.interface';
import { CheckService } from 'src/help/ckeck.service';
import { Request } from 'express';
import { HelpJwtService } from 'src/help/token.service';
import { UserDocument } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
export declare class EventService {
    private httpService;
    private checkService;
    private jwtHelpService;
    private userModel;
    constructor(httpService: HttpService, checkService: CheckService, jwtHelpService: HelpJwtService, userModel: Model<UserDocument>);
    getUserEventsInfo(request: Request): Promise<void>;
    getEventsByCategory(eventsInfo: IEventsInfo): Promise<any[]>;
    getEventInfoById(eventId: string | number): Promise<any>;
}
