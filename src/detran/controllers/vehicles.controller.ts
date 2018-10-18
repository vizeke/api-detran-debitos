import { Controller, Get, Param } from '@nestjs/common';
import { VehiclesService } from '../services/vehicles.service';

@Controller('veiculos')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get()
  findAll() {
    return 'Veiculos';
  }
  @Get(':plate/:owner_document')
  async searchVehicle(@Param() params): Promise<JSON> {
    /**TODO try catch */
    return await this.vehiclesService.searchVehicle(params.plate, params.owner_document);
  }

  @Get(':plate/:owner_document/debitos')
  async getTickets(@Param() params): Promise<JSON> {
    return await this.vehiclesService.getTickets(params.plate, params.owner_document);
  }

}
