import { Module, HttpModule } from '@nestjs/common';
import { VehiclesController } from '../detran/controllers/vehicles.controller';
import { VehiclesService } from '../detran/services/vehicles.service';
import { DetranSoapClient } from '../detran/services/detran-soap-client';

@Module({
  imports: [HttpModule],
  controllers: [VehiclesController],
  providers: [VehiclesService, DetranSoapClient],
})
export class DetranModule {}
