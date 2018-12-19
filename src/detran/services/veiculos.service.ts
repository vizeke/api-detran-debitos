import { Injectable, HttpStatus } from '@nestjs/common';
import { DetranSoapClient } from '../repository/detran-soap-client';
import { Retorno } from '../models/retorno.model';
import { VeiculoConsulta } from '../models/veiculoConsulta.model';
import { VeiculoRetorno } from '../models/veiculoRetorno.model';
import { DebitoRetorno } from '../models/debitoRetorno.model';
import { GerarGuiaRetorno } from '../models/gerarGuiaRetorno.model';
import { TipoDebito } from '../models/tipoDebito.model';

@Injectable()
export class VeiculosService {
  detranSoapClient: DetranSoapClient;
  res: any;
  veiculoConsulta: any;
  veiculoRetorno: VeiculoRetorno;
  client: any;
  debitos: any;

  constructor() {
    this.detranSoapClient = new DetranSoapClient();
  }

  async getDadosVeiculos( params: any ): Promise<Retorno> {

    this.veiculoConsulta = new VeiculoConsulta( params );
    this.client = await this.detranSoapClient._client;

    if ( Object.keys( this.client )[ 0 ] === 'mensagemErro' ) {
      return new Retorno( this.client );
    }

    try {
      this.res = await this.client.ObterDadosVeiculo( this.veiculoConsulta );
      this.veiculoRetorno = new VeiculoRetorno( this.res.ObterDadosVeiculoResult );
      return new Retorno( this.veiculoRetorno );
    } catch ( error ) {
      return new Retorno( {
        mensagemErro: 'Erro ao obter os dados do veiculo.',
      },
      );
    }
  }

  async getDebitos( params: any ): Promise<Retorno> {

    this.veiculoConsulta = new VeiculoConsulta( params );
    this.client = await this.detranSoapClient._client;

    if ( Object.keys( this.client )[ 0 ] === 'mensagemErro' ) {
      return new Retorno( this.client );
    }

    try {
      this.res = await this.client.ObterDebitos( this.veiculoConsulta );
      this.debitos = new DebitoRetorno( this.res.ObterDebitosResult );
      return new Retorno( this.debitos.debitos );
    } catch ( error ) {
      return new Retorno( {
        mensagemErro: 'Erro ao obter debitos.',
      },
      );
    }
  }

  async getDebitosPreview( params: any ): Promise<Retorno> {

    this.veiculoConsulta = new VeiculoConsulta( params );
    this.client = await this.detranSoapClient._client;

    if ( Object.keys( this.client )[ 0 ] === 'mensagemErro' ) {
      return new Retorno( this.client );
    }

    try {
      this.res = await this.client.ObterTiposDebitos( this.veiculoConsulta );
      const tipoDebito = new TipoDebito( this.res.ObterTiposDebitosResult.TipoDebito );

      return new Retorno( tipoDebito );
    } catch ( error ) {
      return new Retorno( {
        mensagemErro: 'Erro ao buscar debitos.',
      },
      );
    }
  }

  async getTiposDebitos( params: any ): Promise<Retorno> {

    this.veiculoConsulta = new VeiculoConsulta( params );
    this.veiculoConsulta.tipoSelecionado = params.tipo_debito.toUpperCase();
    this.client = await this.detranSoapClient._client;

    if ( Object.keys( this.client )[ 0 ] === 'mensagemErro' ) {
      return new Retorno( this.client );
    }

    try {
      this.res = await this.client.ObterDebitosPorTipoDebito( this.veiculoConsulta );
      this.debitos = new DebitoRetorno( this.res.ObterDebitosPorTipoDebitoResult );
      return new Retorno( this.debitos.debitos );

    } catch ( error ) {
      return new Retorno( {
        mensagemErro: 'Erro ao buscar os debitos.',
      } );
    }
  }

  async gerarGRU( params: any ): Promise<Retorno> {

    this.veiculoConsulta = new VeiculoConsulta( params );
    this.client = await this.detranSoapClient._client;
    const array_ids: Array<string> = new Array();
    let d: Retorno;

    if ( Object.keys( this.client )[ 0 ] === 'mensagemErro' ) {
      return new Retorno( this.client );
    }

    try {
      let deb: Retorno = await this.getDebitos( params );
      if ( deb.res[0] === 'Não foram encontrados debitos para esse veiculo.' || deb.status !== HttpStatus.OK ) {
        return deb;
      } else {
        deb = await this.verificaIpvaCotaUnica(params, deb);
        for ( const debito of deb.res ) {
          array_ids.push( debito.idDebito );
        }
      }
    } catch ( error ) {
      return new Retorno( {
        mensagemErro: 'Erro ao buscar os debitos.',
      } );
    }

    this.veiculoConsulta.listaDebitos = array_ids.toString();

    try {
      this.res = await this.client.GerarGuia( this.veiculoConsulta );
      const guia: any = new GerarGuiaRetorno( this.res.GerarGuiaResult );
      return new Retorno( guia );
    } catch ( error ) {
      return new Retorno( {
        mensagemErro: 'Error ao gerar a GRU.',
      } );
    }
  }

  async gerarGRUParcial( params: any ): Promise<Retorno> {

    this.veiculoConsulta = new VeiculoConsulta( params );
    this.client = await this.detranSoapClient._client;
    let validoListaIDs: boolean;
    let deb: Retorno;
    // const tipoDebito: Array<string> = params.tipo_debito.split(',');

    const listaIDs: Array<number> = params.listaIDs.split(',').map(Number);

    try {
      deb = await this.getTiposDebitos( params );
      if ( deb.res[0] === 'Não foram encontrados debitos para esse veiculo.' || deb.status !== HttpStatus.OK ) {
        validoListaIDs = false;
      } else {
        try {
          switch (params.tipo_debito.toUpperCase()) {
            case 'LICENCIAMENTOATUAL':
              validoListaIDs = await this.validaLicenciamentoAtual(deb, listaIDs);
              break;
            case 'LICENCIAMENTOANTERIOR':
              validoListaIDs = await this.validaLicenciamentoAnterior(deb, listaIDs);
              break;
            case 'IPVA':
              validoListaIDs = await this.validaIPVA(deb, listaIDs);
              break;
            case 'DPVAT':
              validoListaIDs = await this.validaDPVAT(deb, listaIDs);
              break;
            case 'MULTA':
              validoListaIDs = await this.validaMulta(deb, listaIDs);
              break;
            default:
              return new Retorno({
                mensagemErro: 'Tipo não cadastrado.',
              });
          }
        } catch (error) {
          return new Retorno({
            mensagemErro: 'Error ao validar debitos.',
          });
        }
      }
    } catch (error) {
      /*TO DO */
      validoListaIDs = false;
    }

    if (validoListaIDs === true){
      return new Retorno({
        mensagemErro: 'Ok.',
      });
    }else{
      return new Retorno({
        mensagemErro: 'Debitos obrigatorios não foram passados.',
      });
    }

  }

  async validaLicenciamentoAtual(deb: Retorno, listaIDs: Array<number>): Promise<boolean>{

    try {
      for ( const debito of deb.res ) {
        if (debito.flagLicenciamentoExercicio === 1){
          const index = listaIDs.indexOf(debito.idDebito);
          if (index <= -1){
            // console.log('INDEX obrigatorio não encontrado > ', debito.idDebito);
            return false;
          }
        }
      }
      return true;
    } catch (error) {
      return false;
    }
  }

  async validaLicenciamentoAnterior(deb: Retorno, listaIDs: Array<number>): Promise<boolean>{

    try {
      for ( const debito of deb.res ) {
        if (debito.flagLicenciamentoAnterior === 1){
          const index = listaIDs.indexOf(debito.idDebito);
          if (index <= -1){
            // console.log('INDEX obrigatorio não encontrado > ', debito.idDebito);
            return false;
          }
        }
      }
      return true;
    } catch (error) {
      return false;
    }
  }

  async validaIPVA(deb: Retorno, listaIDs: Array<number>): Promise<boolean>{

    let ipvaCotasMaisNovo: number;
    try {
      ipvaCotasMaisNovo = 0;
      for ( const debito of deb.res ) {
        if (debito.flagIpvaExercicio === 1){
          const index = listaIDs.indexOf(debito.idDebito);
          /*if (ipvaCotasMaisNovo < Number(debito.ipvaCotas)){
            ipvaCotasMaisNovo = Number(debito.ipvaCotas);
          }*/
          if (index <= -1){
            // console.log('INDEX obrigatorio não encontrado > ', debito.idDebito);
            return false;
          }
        }
      }
      return true;
    } catch (error) {
      return false;
    }
  }

  async validaDPVAT(deb: Retorno, listaIDs: Array<number>): Promise<boolean>{
    try {
      for ( const debito of deb.res ) {
        if (debito.flagDpvatExercicio === 1){
          const index = listaIDs.indexOf(debito.idDebito);
          if (index <= -1){
            // console.log('INDEX obrigatorio não encontrado > ', debito.idDebito);
            return false;
          }
        }
      }
      return true;
    } catch (error) {
      return false;
    }
  }

  async validaMulta(deb: Retorno, listaIDs: Array<number>): Promise<boolean>{

    return false;
  }

  async verificaIpvaCotaUnica(params: any, debitos: Retorno): Promise<Retorno> {

    let ipvaCotaUnica: boolean =  false;
    let cotaUniExerc: number = -1;
    const regExIpvaCotas = /^\d{4}0$/g;
    let ipvaDebitos: Retorno;

    params.tipo_debito = 'ipva';
    ipvaDebitos = await this.getTiposDebitos(params);    

    for (const ipvadeb of ipvaDebitos.res) {
      if (regExIpvaCotas.test(ipvadeb.ipvaCotas)){
        ipvaCotaUnica = true;
        cotaUniExerc = ipvadeb.exercicio;
        break
      }
    }

    if (ipvaCotaUnica){
      for (const ipvadeb of ipvaDebitos.res) { 
        if (ipvadeb.exercicio === cotaUniExerc && ipvadeb.parcela !== 0){
          const result = debitos.res.findIndex(obj => obj.idDebito === ipvadeb.idDebito) 
          debitos.res.splice(result, 1);
        }
      }
    }
    return debitos;
  }

}
