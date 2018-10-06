import { Controller, Get, Param } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';

const soap = require('soap-as-promised');

@Controller('vehicles')
export class VehiclesController {

  @Get(":place/:owner_document/:vehicle_document")
  async getTickets(@Param() params): Promise<String> {
      return await soap.createClient('http://example.org/wsdl')
    
    .then((result) => console.log(`The result was: ${result}`))
    .catch((error) => console.error(`There was an error! ${error}`));
  }
}
