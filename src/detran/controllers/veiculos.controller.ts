import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { VeiculosService } from '../services/veiculos.service';
import { ApiOperation, ApiResponse, ApiImplicitParam, ApiUseTags } from '@nestjs/swagger';
import { MensagemErro } from '../models/mensagemErro';
/**
 * TO DO colocar em pt-br as rotas
 */
@Controller( 'veiculos' )
@ApiUseTags('api-detran')
export class VeiculosController {
  resposta: any;
  respostaErro: MensagemErro;

  constructor( private readonly veiculosService: VeiculosService ) { }

  @Get( ':placa/:doc_proprietario' )
  @ApiOperation( {
    description: 'retorna os dados do veiculo através do WebService InternetBanking',
    title: 'Dados do veiculo WS',
  } )
  @ApiResponse( { status: 200, description: 'Retorna informações do veiculo ' } )
  @ApiResponse( { status: 403, description: 'Veiculo não encontrado ou não permitido vizualisar as informações' } )
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
  async getDataVeiculosWS( @Res() res, @Param() params ) {
    try {
      this.resposta = await this.veiculosService.getDataVeiculosWS( params.placa, params.doc_proprietario );

      switch (Object.keys(this.resposta)[0]) {
        case ('VeiculoInfo'):
          res.status(HttpStatus.OK).send( this.resposta );
          break;
        case ('MensagemErro'):
        /**
         * TO DO
         */
          this.respostaErro = new MensagemErro(this.resposta);
          res.status(this.respostaErro.status).send(this.resposta.MensagemErro);
          break;
      }
    } catch ( err ) {
      res.status( HttpStatus.BAD_REQUEST )
      .send( ' Error ao fazer a requisição dos dados do veiculo. Error: ', err );
    }
  }

  @Get( 'debitos/:placa/:doc_proprietario' )
  @ApiOperation( {
    description: 'retorna uma lista com os débitos do veiculo',
    title: 'Débitos do veiculo',
  } )
  @ApiResponse( { status: 200, description: 'Veiculo encontrado' } )
  @ApiResponse( { status: 403, description: 'MensagemErro' } )
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
      res.status(HttpStatus.OK).send(this.resposta);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).send('Erro ao requisitar os débitos');
    }

  }

  @Get( 'debitos-preview/:placa/:doc_proprietario' )
  @ApiOperation( {
    description: 'Retorna uma previa dos débitos do veiculo',
    title: 'Prévia dos débitos do veiculo',
  } )
  @ApiResponse( { status: 200, description: 'Veiculo encontrado' } )
  @ApiResponse( { status: 403, description: 'MensagemErro' } )
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
      res.status(HttpStatus.OK).send(this.resposta);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST)
      .send('Erro ao exibir preview dos debitos.');
    }
  }

  @Get( 'debitos-tipo/:placa/:doc_proprietario/:tipo_debito' )
  @ApiOperation( {
    description: 'Retorna uma lista de um tipo de débitos do veiculo',
    title: 'Prévia dos débitos do veiculo',
  } )
  @ApiResponse( { status: 200, description: 'Veiculo encontrado' } )
  @ApiResponse( { status: 403, description: 'MensagemErro' } )
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
      res.status(HttpStatus.OK).send(this.resposta);
    } catch (error) {
      res.status(HttpStatus.NOT_FOUND)
      .send(`Erro ao exibir lista de debitos do tipo ${params.tipo_debito}.`);
    }
  }

}
