"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
let EventService = class EventService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getEventsByCategory(eventsInfo) {
        const { data } = await this.httpService.get(`https://kudago.com/public-api/v1.4/events/?page=${eventsInfo.page}&page_size=75&categories=${eventsInfo.nameCategory}&fields=id,title,description,price,images,age_restriction`).toPromise();
        if (data) {
            return data;
        }
        else {
            throw new common_1.HttpException('Ничего не найдено', 404);
        }
    }
    async getEventInfoById(eventId) {
        const { data } = await this.httpService.get(`https://kudago.com/public-api/v1.4/events/${eventId}`).toPromise();
        if (data) {
            return data;
        }
        else {
            throw new common_1.HttpException('Ничего не найдено', 404);
        }
    }
};
EventService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], EventService);
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map