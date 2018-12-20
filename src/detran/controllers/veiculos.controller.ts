import { Controller, Get, Param, Res, HttpStatus, HttpException } from '@nestjs/common';
import { VeiculosService } from '../services/veiculos.service';
import { ApiOperation, ApiResponse, ApiImplicitParam, ApiUseTags } from '@nestjs/swagger';
import { Retorno } from '../models/retorno.model';
import { Debito } from '../models/debito.model';
import { VeiculoRetorno } from '../models/veiculoRetorno.model';
import { TipoDebito } from '../models/tipoDebito.model';
import { DebitoRetorno } from '../models/debitoRetorno.model';

@Controller( 'veiculos' )
@ApiUseTags('veiculos-debitos')
export class VeiculosController {
  resposta: Retorno;
  respostaErro: any;

  constructor( private readonly veiculosService: VeiculosService ) { }

  @Get( ':placa/:renavam' )
  @ApiOperation( {
    description: 'retorna os dados do veiculo através do WebService InternetBanking',
    title: 'Dados do veiculo',
  } )
  @ApiResponse( { status: 200, description: 'Retorna informações do veiculo ', type: VeiculoRetorno } )
  @ApiResponse( { status: 403, description: 'Retorna uma MensagemErro' } )
  @ApiImplicitParam( {
    name: 'placa',
    description: 'Placa do veiculo',
    required: true,
  } )
  @ApiImplicitParam( {
    name: 'renavam',
    description: 'Renavam do veiculo.',
    required: true,
  } )
  async getDadosVeiculos( @Res() res, @Param() params ) {
    try {
      this.resposta = await this.veiculosService.getDadosVeiculos( params );
      res.status( this.resposta.status ).send( this.resposta.res);
    } catch ( error ) {
      throw new HttpException('Error ao fazer a requisição dos dados do veiculo.', HttpStatus.FORBIDDEN);
    }
  }

  @Get( ':placa/:renavam/debitos' )
  @ApiOperation( {
    description: 'retorna uma lista com os débitos do veiculo',
    title: 'Débitos do veiculo',
  } )
  @ApiResponse( { status: 200, description: 'Veiculo encontrado, retorna um array de debitos', type: Debito } )
  @ApiResponse( { status: 403, description: 'Retorna uma MensagemErro' } )
  @ApiImplicitParam( {
    name: 'placa',
    description: 'Placa do veiculo',
    required: true,
  } )
  @ApiImplicitParam( {
    name: 'renavam',
    description: 'Renavam do veiculo',
    required: true,
  } )
  async getDebitos( @Res() res, @Param() params ) {
    try {
      this.resposta = await this.veiculosService.getDebitos( params );
      res.status( this.resposta.status ).send( this.resposta.res);
    } catch (error) {
      throw new HttpException('Erro ao requisitar os débitos.', HttpStatus.FORBIDDEN);
    }

  }

  @Get( ':placa/:renavam/debitos-preview' )
  @ApiOperation( {
    description: 'Retorna uma previa dos débitos do veiculo',
    title: 'Prévia dos débitos do veiculo',
  } )
  @ApiResponse( { status: 200, description: 'Veiculo encontrado, retorna um array de debitos', type: TipoDebito } )
  @ApiResponse( { status: 403, description: 'Retorna uma MensagemErro' } )
  @ApiImplicitParam( {
    name: 'placa',
    description: 'Placa do veiculo',
    required: true,
  } )
  @ApiImplicitParam( {
    name: 'renavam',
    description: 'Renavam do veiculo',
    required: true,
  } )
  async getDebitosPreview( @Res() res, @Param() params ) {
    try {
      this.resposta = await this.veiculosService.getDebitosPreview( params );
      res.status( this.resposta.status ).send( this.resposta.res);
    } catch (error) {
      throw new HttpException('Erro ao exibir preview dos debitos.', HttpStatus.FORBIDDEN);
    }
  }

  @Get( ':placa/:renavam/debitos-tipo/:tipo_debito' )
  @ApiOperation( {
    description: 'Retorna uma lista de um tipo de débitos do veiculo',
    title: 'Prévia dos débitos do veiculo',
  } )
  @ApiResponse( { status: 200, description: 'Veiculo encontrado, retorna um array de debitos', type: Debito } )
  @ApiResponse( { status: 403, description: 'Retorna uma MensagemErro' } )
  @ApiImplicitParam( {
    name: 'placa',
    description: 'Placa do veiculo',
    required: true,
  } )
  @ApiImplicitParam( {
    name: 'renavam',
    description: 'Renavam do veiculo',
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
      throw new HttpException('Erro ao exibir lista de debitos do tipo.', HttpStatus.FORBIDDEN);
    }
  }

  @Get( ':placa/:renavam/debitos/guia' )
  @ApiOperation( {
    description: 'Retornar uma GRU com todos os debitos ',
    title: 'Gerar GRU de todos os débitos',
  } )
  @ApiResponse( { status: 200, description: 'Veiculo encontrado, retorna o um array de itens com o pdf, em base64 do boleto', type: DebitoRetorno } )
  @ApiResponse( { status: 403, description: 'Retorna uma MensagemErro' } )
  @ApiImplicitParam( {
    name: 'placa',
    description: 'Placa do veiculo',
    required: true,
  } )
  @ApiImplicitParam( {
    name: 'renavam',
    description: 'Renavam do veiculo',
    required: true,
  } )
  async gerarGRU( @Res() res, @Param() params ) {

    try {
      this.resposta = await this.veiculosService.gerarGRU( params);
      res.status( this.resposta.status ).send( this.resposta.res );
    } catch (error) {
      throw new HttpException('Erro ao gerar a GRU.', HttpStatus.FORBIDDEN);
    }
  }
}