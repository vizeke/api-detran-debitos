import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { VehiclesService } from '../services/vehicles.service';
import { ApiOperation, ApiResponse, ApiImplicitParam, ApiUseTags } from '@nestjs/swagger';
import { MensagemErroWS } from 'detran/models/mensagemErroWS';

@Controller( 'vehicles' )
@ApiUseTags('api-detran')
export class VehiclesController {
  resposta: any;
  respostaErro: MensagemErroWS;

  constructor( private readonly vehiclesService: VehiclesService ) { }

  @Get( 'dataDB/:plate/:owner_document' )
  @ApiOperation( {
    description: 'retorna os dados do veiculo direto do banco de dados',
    title: 'Dados do veiculo BD',
  } )
  @ApiResponse( { status: 200, description: 'Veiculo encontrado' } )
  //@ApiResponse( { status: 403, description: 'MensagemErro' } )
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
  async getDataVehiclesDB( @Res() res, @Param() params ) {
    try {
      this.resposta = await this.vehiclesService.getDataVehiclesDB( params.plate, params.owner_document );
      res.status(HttpStatus.OK).send( this.resposta );
    } catch ( error ) {
      res.status( HttpStatus.BAD_REQUEST )
      .send( ' Error ao fazer a requisição de dados do veiculo no BD. Error: ', error );
    }
  }

  @Get( 'dataWS/:plate/:owner_document' )
  @ApiOperation( {
    description: 'retorna os dados do veiculo através do WebService InternetBanking',
    title: 'Dados do veiculo WS',
  } )
  @ApiResponse( { status: 200, description: 'Veiculo encontrado' } )
  @ApiResponse( { status: 403, description: 'MensagemErro' } )
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
  async getDataVehiclesWS( @Res() res, @Param() params ) {
    try {
      this.resposta = await this.vehiclesService.getDataVehiclesWS( params.plate, params.owner_document );
      switch (Object.keys(this.resposta)[0]) {
        case ('VeiculoInfo'):
          res.status(HttpStatus.OK).send( this.resposta );
          break;
        case ('MensagemErro'):
        /**
         * TO DO
         */
          this.respostaErro = new MensagemErroWS(this.resposta);
          res.status(this.respostaErro.status).send(this.resposta.MensagemErro);
          break;
      }
    } catch ( error ) {
      res.status( HttpStatus.NOT_FOUND )
      .send( ' Error ao fazer a requisição dos dados do veiculo. Error: ', error );
    }
  }

  @Get( 'debits/:plate/:owner_document' )
  @ApiOperation( {
    description: 'retorna uma lista com os débitos do veiculo',
    title: 'Débitos do veiculo',
  } )
  @ApiResponse( { status: 200, description: 'Veiculo encontrado' } )
  @ApiResponse( { status: 403, description: 'MensagemErro' } )
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
  async getDebits( @Res() res, @Param() params ) {
    try {
      this.resposta = await this.vehiclesService.getDebits( params.plate, params.owner_document );
      res.status(HttpStatus.OK).send(this.resposta);
    } catch (error) {
      res.status(HttpStatus.NOT_FOUND).send(this.resposta.MensagemErro);
    }

  }

  @Get( 'debits-preview/:plate/:owner_document' )
  @ApiOperation( {
    description: 'Retorna uma previa dos débitos do veiculo',
    title: 'Prévia dos débitos do veiculo',
  } )
  @ApiResponse( { status: 200, description: 'Veiculo encontrado' } )
  @ApiResponse( { status: 403, description: 'MensagemErro' } )
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
  async getDebitsPreview( @Res() res, @Param() params ) {
    try {
      this.resposta = await this.vehiclesService.getDebitsPreview( params.plate, params.owner_document );
      res.status(HttpStatus.OK).send(this.resposta);
    } catch (error) {
      res.status(HttpStatus.NOT_FOUND)
      .send('Erro ao exibir preview dos debitos.');
    }
  }

  @Get( 'debits-tipo/:plate/:owner_document/:type_debits' )
  @ApiOperation( {
    description: 'Retorna uma lista de um tipo de débitos do veiculo',
    title: 'Prévia dos débitos do veiculo',
  } )
  @ApiResponse( { status: 200, description: 'Veiculo encontrado' } )
  @ApiResponse( { status: 403, description: 'MensagemErro' } )
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
  @ApiImplicitParam( {
    name: 'type_debits',
    description: 'Tipo de debitos',
    required: true,
  } )
  async getTypeDebits( @Res() res, @Param() params ) {
    try {
      this.resposta = await this.vehiclesService.getTypeDebits( params.plate, params.owner_document, params.type_debits );
      res.status(HttpStatus.OK).send(this.resposta);
    } catch (error) {
      res.status(HttpStatus.NOT_FOUND)
      .send(`Erro ao exibir lista de debitos do tipo ${params.type_debits}.`);
    }
  }

}
