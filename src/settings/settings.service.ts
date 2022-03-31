import { Injectable } from '@nestjs/common';

@Injectable()
export class SettingsService {
    async updateUserAvatar(file: any) {
        console.log(file);
    }
}
