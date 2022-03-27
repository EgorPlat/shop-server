import { Controller, Get, Headers, Post, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiTags } from '@nestjs/swagger';
import { ProfileService } from './profile.service';
import { Request } from 'express';

@Controller('profile')
@ApiTags('Профиль')
export class ProfileController {

    constructor(private profileService: ProfileService) {}

    @Get('/my-profile')
    getMyProfile(@Req() request: Request) {
        return this.profileService.getMyProfile(request);
    }
    @Post('/by-login')
    getProfileByLogin(@Req() request: Request) {
        return this.profileService.getProfileByLogin(request);
    }
}
