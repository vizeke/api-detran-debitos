import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DetranModule } from './detran/detran.module';
import { VehiclesService } from './detran/services/vehicles.service';
import { VehiclesController } from './detran/controllers/vehicles.controller';

@Module({
  imports: [DetranModule],
  controllers: [AppController,VehiclesController],
  providers: [AppService, VehiclesService],
})
export class AppModule {}
