import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { VeiculosService } from '../services/veiculos.service';
import { ApiOperation, ApiResponse, ApiImplicitParam, ApiUseTags } from '@nestjs/swagger';
import { Retorno } from '../models/retorno';

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
      this.resposta = await this.veiculosService.getDadosVeiculos( params );
      res.status( this.resposta.status ).send( this.resposta.res);
    } catch ( error ) {
      res.status( HttpStatus.BAD_REQUEST )
      .send( ' Error ao fazer a requisição dos dados do veiculo. Error: ', error );
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
  async getDebitos( @Res() res, @Param() params ) {
    try {
      this.resposta = await this.veiculosService.getDebitos( params );
      res.status( this.resposta.status ).send( this.resposta.res);
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
  async getDebitosPreview( @Res() res, @Param() params ) {
    try {
      this.resposta = await this.veiculosService.getDebitosPreview( params );
      res.status( this.resposta.status ).send( this.resposta.res);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST)
      .send('Erro ao exibir preview dos debitos.');
    }
  }

  @Get( ':placa/:doc_proprietario/debitos-tipo/:tipo_debito' )
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
  async getTiposDebitos( @Res() res, @Param() params ) {
    try {
      this.resposta = await this.veiculosService.getTiposDebitos( params );
      res.status( this.resposta.status ).send( this.resposta.res );
    } catch (error) {
      res.status(HttpStatus.NOT_FOUND)
      .send(`Erro ao exibir lista de debitos do tipo ${params.tipo_debito}.`);
    }
  }

  @Get( ':placa/:doc_proprietario/gerar-gru' )
  @ApiOperation( {
    description: 'Retornar uma GRU com todos os debitos ',
    title: 'Gerar GRU de todosos débitos',
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
  async gerarGRU( @Res() res, @Param() params ) {

    try {
      this.resposta = await this.veiculosService.gerarGRU( params);
      res.status( this.resposta.status ).send( this.resposta.res );
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST)
      .send('Erro ao gerar a GRU.');
    }
  }
}