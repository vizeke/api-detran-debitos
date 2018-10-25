import { Module } from '@nestjs/common';
import { VehiclesController } from '../../detran/controllers/vehicles.controller';
import { VehiclesService } from '../../detran/services/vehicles.service';

@Module( {
  controllers: [ VehiclesController ],
  providers: [ VehiclesService ],
} )
export class DetranModule { }
