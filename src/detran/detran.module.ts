import { Module, HttpModule } from '@nestjs/common';
import { VehiclesController } from './controllers/vehicles.controller';
import { VehiclesService } from './services/vehicles.service';
import { DetranSoapClient } from './services/detran-soap-client';

@Module({
  imports: [HttpModule],
  controllers: [VehiclesController],
  providers: [VehiclesService, DetranSoapClient],
})
export class DetranModule {}
