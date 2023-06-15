import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { dbUrl } from "./global/data";
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { HelpJwtModule } from './help/token.module';
import { AppGateway } from './app.gateway';
import { CategoryModule } from "./modules/category/category.module";
import { ProductModule } from "./modules/product/product.module";

@Module({
  controllers: [AppController],
  providers: [AppService, AppGateway],
  imports: [
    HelpJwtModule,
    UsersModule,
    MongooseModule.forRoot(dbUrl),
    AuthModule,
    CategoryModule,
    ProductModule
  ],
})
export class AppModule {

}