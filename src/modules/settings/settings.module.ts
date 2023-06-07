import { Module } from '@nestjs/common';
import { AuthModule } from 'src/modules/auth/auth.module';
import { HelpJwtModule } from 'src/help/token.module';
import { UsersModule } from 'src/modules/users/users.module';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';

@Module({
  controllers: [SettingsController],
  providers: [SettingsService],
  imports: [UsersModule, AuthModule, HelpJwtModule]
})
export class SettingsModule {}
