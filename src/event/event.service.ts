import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { IEventsInfo } from 'src/interfaces/events.interface';
import { CheckService } from 'src/help/ckeck.service';
import { lastValueFrom }  from 'rxjs';
import { Request } from 'express';
import { HelpJwtService } from 'src/help/token.service';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class EventService {

    constructor(
        private httpService: HttpService,
        private checkService: CheckService,
        private jwtHelpService: HelpJwtService,
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) {}

    async getUserEventsInfo(request: Request) {
        const decodedJwt = this.jwtHelpService.decodeJwt(request);
        const user = await this.userModel.findOne({email: decodedJwt.email}, {
            _id: false,
            __v: false
        });
        let userEventsInfo = [];
        if (user) {
            await Promise.all(user.events.map(async (eventId) => {
                const {data} = await this.httpService.get(
                    `https://kudago.com/public-api/v1.4/events/${eventId}`
                ).toPromise();
                if (data) {
                    return data;
                } else {
                    return null;
                }
            })).then(results => {
                userEventsInfo = results.filter(el => el !== null)
            })
        }
        throw new HttpException(userEventsInfo, 200);
    }

    async getEventsByCategory(eventsInfo: IEventsInfo) {
        const {data} = await this.httpService.get(
            `https://kudago.com/public-api/v1.4/events/?page=${eventsInfo.page}&page_size=70&categories=${eventsInfo.nameCategory}&fields=id,title,description,price,images,age_restriction`
        ).toPromise();
        if(data) {
            let newData = [];
            await Promise.all( data.results.map( async (el) => 
                await lastValueFrom(this.httpService.head(`${el.images[0].image}`)).then(() => {
                    return el;
                }).catch(() => {
                    return null;
                })
                )).then(results => {
                newData = results.filter(res => res !== null);
            }).catch(() => {
                throw new HttpException('Ошибка сервера.', 500);
            })
            return newData;
        } else {
            throw new HttpException('Ничего не найдено', 404);
        }
    }
    async getEventInfoById(eventId: string | number) {
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
