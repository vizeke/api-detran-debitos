import { Controller, Get, Param } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get(":plate/:owner_document/:vehicle_document")
  async getTickets(@Param() params): Promise<JSON> {
    return await this.vehiclesService.getTickets(params.plate, params.owner_document, params.vehicle_document);
  }
}
