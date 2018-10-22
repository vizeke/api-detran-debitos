import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { VehiclesService } from '../services/vehicles.service';
import { ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';

@Controller('veiculos')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get(':plate/:owner_document')
  @ApiOperation ({
    description: 'retorna os dados do veiculo',
    title: 'Dados do veiculo',
  })
  @ApiResponse( { status: 200, description: 'Veiculo encontrado'} )
  @ApiResponse( { status: 204, description: 'Veiculo não econtrado'} )
  @ApiImplicitParam( {
    name: 'plate',
    description: 'Placa do veiculo',
    required: true,
  })
  @ApiImplicitParam( {
    name: 'owner_document',
    description: 'Documento do proprietario do veiculo',
    required: true,
  })
  async searchVehicle( @Res() res, @Param() params){
    /** TODO try catch */
    try {
      res.status( HttpStatus.OK )
      .send(await this.vehiclesService.searchVehicle(params.plate, params.owner_document));
    }catch ( error ){
      res.status( HttpStatus.NOT_FOUND)
      .send(' Veiculo nao encontrado ');
    }
    // return await this.vehiclesService.searchVehicle(params.plate, params.owner_document);
  }

  @Get(':plate/:owner_document/debitos')
  @ApiOperation ({
    description: 'retorna uma lista com os débitos do veiculo',
    title: 'Débitos do veiculo',
  })
  @ApiResponse( { status: 200, description: 'Veiculo encontrado'} )
  @ApiResponse( { status: 204, description: 'Veiculo não econtrado'} )
  @ApiImplicitParam( {
    name: 'plate',
    description: 'Placa do veiculo',
    required: true,
  })
  @ApiImplicitParam( {
    name: 'owner_document',
    description: 'Documento do proprietario do veiculo',
    required: true,
  })
  async getTickets(@Param() params): Promise<JSON> {
    return await this.vehiclesService.getTickets(params.plate, params.owner_document);
  }

}
