import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { VehiclesService } from '../services/vehicles.service';
import { ApiOperation, ApiResponse, ApiImplicitParam } from '@nestjs/swagger';
import { RespostaErroWSIB } from 'detran/models/RespostaerroWIB';

@Controller( 'veiculos' )
export class VehiclesController {
  resposta: any;
  respostaErro: RespostaErroWSIB;

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
  async searchVehicle( @Res() res, @Param() params ) {
    try {
      this.resposta = await this.vehiclesService.searchVehicle( params.plate, params.owner_document );
      switch (Object.keys(this.resposta)[0]) {
        case ('VeiculoInfo'):
          res.status(HttpStatus.OK).send( this.resposta );
          break;
        case ('MensagemErro'):
          this.respostaErro = new RespostaErroWSIB(this.resposta);
          res.status(HttpStatus.CONFLICT).send(this.resposta.MensagemErro);
          break;
        default:
        // console.log('\n\nEntrou\n\n');
      }
    } catch ( error ) {
      res.status( HttpStatus.BAD_REQUEST )
      .send( ' Error ao fazer a requisição ' );
    }
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
  async getTickets( @Res() res, @Param() params ): Promise<JSON> {
    try {
      this.resposta = await this.vehiclesService.getTickets( params.plate, params.owner_document );

    } catch (error) {

    }

  }

}
