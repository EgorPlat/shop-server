import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { dbUrl } from "./global/data";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { SettingsController } from './settings/settings.controller';
import { SettingsService } from './settings/settings.service';
import { SettingsModule } from './settings/settings.module';

@Module({
    controllers: [AppController, SettingsController],
    providers: [AppService, SettingsService],
    imports: [UsersModule, MongooseModule.forRoot(dbUrl), AuthModule, ProfileModule, SettingsModule]
})
export class AppModule {

}