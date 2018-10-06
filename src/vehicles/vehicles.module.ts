import { Module, HttpModule } from '@nestjs/common';
import { VehiclesController } from './vehicles.controller';
import { VehiclesService } from './vehicles.service';

@Module({
  imports: [HttpModule],
  controllers: [VehiclesController],
  providers: [VehiclesService],
})
export class VehiclesModule {}