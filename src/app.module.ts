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
import { ChatModule } from './chat/chat.module';
import { HelpJwtModule } from "./help/token.module";
import { AppGateway } from './app.gateway';

@Module({
    controllers: [AppController, SettingsController],
    providers: [AppService, SettingsService, AppGateway],
    imports: [HelpJwtModule, UsersModule, MongooseModule.forRoot(dbUrl), AuthModule, ProfileModule, SettingsModule, ChatModule]
})
export class AppModule {

}