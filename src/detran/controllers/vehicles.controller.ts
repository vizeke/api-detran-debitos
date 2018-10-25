import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { VehiclesService } from '../services/vehicles.service';
import { ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';

@Controller( 'veiculos' )
export class VehiclesController {
  resposta: any;
  statushttp: string;

  constructor( private readonly vehiclesService: VehiclesService ) { }

  @Get( ':plate/:owner_document' )
  @ApiOperation( {
    description: 'retorna os dados do veiculo',
    title: 'Dados do veiculo',
  } )
  @ApiResponse( { status: 200, description: 'Veiculo encontrado' } )
  @ApiResponse( { status: 204, description: 'Sem conteudo' } )
  @ApiImplicitParam( {
    name: 'plate',
    description: 'Placa do veiculo',
    required: true,
  } )
  @ApiImplicitParam( {
    name: 'owner_document',
    description: 'Documento do proprietario do veiculo',
    required: true,
  } )
  async searchVehicle ( @Res() res, @Param() params ) {
    // console.log('RES CONTROLLER', res);
    /** TODO try catch */
    this.statushttp = '200';
    try {
      this.resposta = await this.vehiclesService.searchVehicle( params.plate, params.owner_document );
      // console.log('RESPOSTA >>>>>>>> ', this.resposta);
      // switch (Object.keys(this.resposta)[0]) {
      //   case ('VeiculoInfo'):
      //     this.statushttp = '200';
      //     break;
      //   case ('MensagemErro'):
      //     this.statushttp = '204';
      //     break;
      //   default:
      //   //console.log('\n\nEntrou\n\n');
      // }
      res.status( this.statushttp )
        .send( this.resposta );
    } catch ( error ) {
      res.status( HttpStatus.NO_CONTENT )
        .send( ' Requisição retornou sem conteúdo! Tente mais tarde ' );
    }
    // return await this.vehiclesService.searchVehicle(params.plate, params.owner_document);
  }

  @Get( ':plate/:owner_document/debitos' )
  @ApiOperation( {
    description: 'retorna uma lista com os débitos do veiculo',
    title: 'Débitos do veiculo',
  } )
  @ApiResponse( { status: 200, description: 'Veiculo encontrado' } )
  @ApiResponse( { status: 404, description: 'Veiculo não econtrado' } )
  @ApiImplicitParam( {
    name: 'plate',
    description: 'Placa do veiculo',
    required: true,
  } )
  @ApiImplicitParam( {
    name: 'owner_document',
    description: 'Documento do proprietario do veiculo',
    required: true,
  } )
  async getTickets ( @Param() params ): Promise<JSON> {
    return await this.vehiclesService.getTickets( params.plate, params.owner_document );
  }

}
