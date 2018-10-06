import { Controller, Get, Param } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get(":place/:owner_document/:vehicle_document")
  async getTickets(@Param() params): Promise<String> {
    return await this.vehiclesService.getTickets(params.place, params.owner_document, params.vehicle_document);
  }
}
