import { Injectable, UploadedFile } from '@nestjs/common';

@Injectable()
export class SettingsService {
    async updateUserAvatar(image: any) {
        console.log(image);
    }
}
