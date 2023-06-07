import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { MailModule } from 'src/modules/mail/mail.module';
import { UnConfirmedUser, UnConfirmedUserSchema } from 'src/schemas/unConfirmedUser.schema';
import { UsersModule } from 'src/modules/users/users.module';
import { AuthController } from './auth.controller'; 
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    MailModule, 
    forwardRef(() => UsersModule), 
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions: {
        expiresIn: '1h'
      }
    }),
    MongooseModule.forFeature([{ name: UnConfirmedUser.name, schema: UnConfirmedUserSchema }]),
  ],
  exports: [AuthService, JwtModule]
})
export class AuthModule {}
