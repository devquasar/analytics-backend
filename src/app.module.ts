import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database.module';
import { EventsModule } from './events/events.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule, EventsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
