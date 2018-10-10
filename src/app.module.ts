import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiclesController } from './vehicles/vehicles.controller';
import { VehiclesService } from './vehicles/vehicles.service';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [VehiclesModule],
  controllers: [AppController, VehiclesController],
  providers: [AppService, VehiclesService],
})
export class AppModule {}
