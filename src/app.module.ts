import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { dbUrl } from "./global/data";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [UsersModule, MongooseModule.forRoot(dbUrl), AuthModule, ProfileModule]
})
export class AppModule {

}