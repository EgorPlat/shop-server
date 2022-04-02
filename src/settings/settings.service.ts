import { HttpCode, HttpException, HttpStatus, Injectable, UploadedFile } from '@nestjs/common';
import * as uuid from 'uuid';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class SettingsService {
    async updateUserAvatar(file: any) {
        const fileName = uuid.v4() + '.jpg';
        const filePath = path.resolve(__dirname, '../../src/static');
        fs.readFile(filePath, (err, buffer) => console.log(buffer));
        /*if(!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath, {recursive: true});
        }
        fs.writeFileSync(path.join(filePath, fileName), file.buffer);*/
        throw new HttpException('Создано успешно!', 200);
    }
}
