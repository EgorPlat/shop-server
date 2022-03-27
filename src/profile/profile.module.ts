import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [ProfileService],
  controllers: [ProfileController],
  imports: [AuthModule, UsersModule]
})
export class ProfileModule {}
