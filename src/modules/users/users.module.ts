import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/modules/auth/auth.module';
import { HelpJwtModule } from 'src/help/token.module';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { User, UserSchema } from 'src/schemas/user.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}]), forwardRef(() => AuthModule), HelpJwtModule],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UsersModule {} 
