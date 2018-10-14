import { Module, HttpModule } from '@nestjs/common';
import { VehiclesController } from '../detran/controllers/vehicles.controller';
import { VehiclesService } from '../detran/services/vehicles.service';

@Module({
  imports: [HttpModule],
  controllers: [VehiclesController],
  providers: [VehiclesService],
})
export class DetranModule {}
