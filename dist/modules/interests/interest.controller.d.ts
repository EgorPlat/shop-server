import { InterestsService } from './interest.service';
import { Request } from 'express';
import { Interest } from 'src/schemas/interests.schema';
export declare class InterestsController {
    private interestsService;
    constructor(interestsService: InterestsService);
    getInterestsById(request: Request): Promise<any[]>;
    getInterests(request: Request): Promise<(Interest & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    addInterests(request: Request): Promise<Interest & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
