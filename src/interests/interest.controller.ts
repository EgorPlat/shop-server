import { Controller, Get, Headers, Param, Post, Req, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiTags } from '@nestjs/swagger';
import { InterestsService } from './interest.service';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { InjectModel } from '@nestjs/mongoose';
import { Interest, InterestDocument } from 'src/schemas/interests.schema';
import { Model } from 'mongoose';

@Controller('interests')
@ApiTags('Интересы')
/*@UseGuards(JwtAuthGuard)*/
export class InterestsController {

    constructor(private interestsService: InterestsService) {}

    @Post('/get-ineterests-by-id')
    getInterestsById(@Req() request: Request) {
        return this.interestsService.getInterestsById(request);
    }
    @Get('/get-ineterests')
    getInterests(@Req() request: Request) {
        return this.interestsService.getInterests(request);
    }
    @Post('/add-interests')
    addInterests(@Req() request: Request) {
        return this.interestsService.addInterests(request);
    }
    /*@Get('/by-login/:login')
    getProfileByLogin(@Param('login') login) {
        return this.profileService.getProfileByLogin(login);
    }*/
}
