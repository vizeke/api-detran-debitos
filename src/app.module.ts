import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DetranModule } from './detran/detran.module';

@Module({
  imports: [DetranModule],
  controllers: [AppController,],
  providers: [AppService, ],
})
export class AppModule {}
