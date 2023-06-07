import { Module } from '@nestjs/common';
import { AuthModule } from 'src/modules/auth/auth.module';
import { HelpJwtService } from 'src/help/token.service';

@Module({
  providers: [HelpJwtService],
  imports: [AuthModule],
  exports: [HelpJwtService]
})
export class HelpJwtModule {}