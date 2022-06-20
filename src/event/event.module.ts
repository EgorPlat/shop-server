import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { CheckService } from 'src/help/ckeck.service';

@Module({
  providers: [EventService,CheckService],
  controllers: [EventController],
  imports: [HttpModule]
})
export class EventModule {}
