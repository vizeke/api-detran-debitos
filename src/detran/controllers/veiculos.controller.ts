import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { VeiculosService } from '../services/veiculos.service';
import { ApiOperation, ApiResponse, ApiImplicitParam, ApiUseTags } from '@nestjs/swagger';
import { Retorno } from '../models/retorno';
/**
 * TO DO colocar em pt-br as rotas
 */
@Controller( 'veiculos' )
@ApiUseTags('api-detran')
export class VeiculosController {
  resposta: Retorno;
  respostaErro: any;

  constructor( private readonly veiculosService: VeiculosService ) { }

  @Get( ':placa/:doc_proprietario' )
  @ApiOperation( {
    description: 'retorna os dados do veiculo através do WebService InternetBanking',
    title: 'Dados do veiculo WS',
  } )
  @ApiResponse( { status: 200, description: 'Retorna informações do veiculo ' } )
  @ApiResponse( { status: 403, description: 'Retorna uma MensagemErro' } )
  @ApiImplicitParam( {
    name: 'placa',
    description: 'Placa do veiculo',
    required: true,
  } )
  @ApiImplicitParam( {
    name: 'doc_proprietario',
    description: 'Documento do proprietario do veiculo',
    required: true,
  } )
  async getDadosVeiculos( @Res() res, @Param() params ) {
    try {
      this.resposta = await this.veiculosService.getDadosVeiculos( params.placa, params.doc_proprietario );
      res.status( this.resposta.status ).send( this.resposta.res );
    } catch ( err ) {
      res.status( HttpStatus.BAD_REQUEST )
      .send( ' Error ao fazer a requisição dos dados do veiculo. Error: ', err );
    }
  }

  @Get( ':placa/:doc_proprietario/debitos' )
  @ApiOperation( {
    description: 'retorna uma lista com os débitos do veiculo',
    title: 'Débitos do veiculo',
  } )
  @ApiResponse( { status: 200, description: 'Veiculo encontrado' } )
  @ApiResponse( { status: 403, description: 'Retorna uma MensagemErro' } )
  @ApiImplicitParam( {
    name: 'placa',
    description: 'Placa do veiculo',
    required: true,
  } )
  @ApiImplicitParam( {
    name: 'doc_proprietario',
    description: 'Documento do proprietario do veiculo',
    required: true,
  } )
  async getDebits( @Res() res, @Param() params ) {
    try {
      this.resposta = await this.veiculosService.getDebits( params.placa, params.doc_proprietario );
      res.status(this.resposta.status).send(this.resposta.res);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).send('Erro ao requisitar os débitos');
    }

  }

  @Get( ':placa/:doc_proprietario/debitos-preview' )
  @ApiOperation( {
    description: 'Retorna uma previa dos débitos do veiculo',
    title: 'Prévia dos débitos do veiculo',
  } )
  @ApiResponse( { status: 200, description: 'Veiculo encontrado' } )
  @ApiResponse( { status: 403, description: 'Retorna uma MensagemErro' } )
  @ApiImplicitParam( {
    name: 'placa',
    description: 'Placa do veiculo',
    required: true,
  } )
  @ApiImplicitParam( {
    name: 'doc_proprietario',
    description: 'Documento do proprietario do veiculo',
    required: true,
  } )
  async getDebitsPreview( @Res() res, @Param() params ) {
    try {
      this.resposta = await this.veiculosService.getDebitsPreview( params.placa, params.doc_proprietario );
      res.status(this.resposta.status).send(this.resposta.res);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST)
      .send('Erro ao exibir preview dos debitos.');
    }
  }

  @Get( ':placa/:doc_proprietario/:tipo_debito/debitos-tipo' )
  @ApiOperation( {
    description: 'Retorna uma lista de um tipo de débitos do veiculo',
    title: 'Prévia dos débitos do veiculo',
  } )
  @ApiResponse( { status: 200, description: 'Veiculo encontrado' } )
  @ApiResponse( { status: 403, description: 'Retorna uma MensagemErro' } )
  @ApiImplicitParam( {
    name: 'placa',
    description: 'Placa do veiculo',
    required: true,
  } )
  @ApiImplicitParam( {
    name: 'doc_proprietario',
    description: 'Documento do proprietario do veiculo',
    required: true,
  } )
  @ApiImplicitParam( {
    name: 'tipo_debito',
    description: 'Tipo de debitos',
    required: true,
  } )
  async getTypeDebits( @Res() res, @Param() params ) {
    try {
      this.resposta = await this.veiculosService.getTypeDebits( params.placa, params.doc_proprietario, params.tipo_debito );
      res.status(this.resposta.status).send(this.resposta.res);
    } catch (error) {
      res.status(HttpStatus.NOT_FOUND)
      .send(`Erro ao exibir lista de debitos do tipo ${params.tipo_debito}.`);
    }
  }

  @Get( ':placa/:doc_proprietario/:lista_id_debitos/gerar-gru' )
  @ApiOperation( {
    description: 'Retornar uma a gru a partir de um conjunto de debitos ',
    title: 'Gerar GRU',
  } )
  @ApiResponse( { status: 200, description: 'Veiculo encontrado' } )
  @ApiResponse( { status: 403, description: 'Retorna uma MensagemErro' } )
  @ApiImplicitParam( {
    name: 'placa',
    description: 'Placa do veiculo',
    required: true,
  } )
  @ApiImplicitParam( {
    name: 'doc_proprietario',
    description: 'Documento do proprietario do veiculo',
    required: true,
  } )
  @ApiImplicitParam( {
    name: 'lista_id_debitos',
    description: 'Lista de IDs de debitos para gerar a GRU',
    required: true,
  } )
  async gerarGRU( @Res() res, @Param() params ) {

    try {
      this.resposta = await this.veiculosService.gerarGRU( params.placa, params.doc_proprietario, params.lista_id_debitos );
      res.status( this.resposta.status ).send( this.resposta.res );
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST)
      .send('Erro ao gerar a GRU.');
    }
  }
}
