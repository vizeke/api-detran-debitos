import { Injectable } from '@nestjs/common';
import { DetranSoapClient } from '../repository/detran-soap-client';
import { Retorno } from '../models/retorno';
import { VeiculoConsulta } from 'detran/models/veiculoConsulta.model';
import { ObterDadosVeiculoResult } from 'detran/models/obterDadosVeiculoResult.model';

@Injectable()
export class VeiculosService {
  detranSoapClient: DetranSoapClient;
  res: any;
  vehicle: any;
  obterDadosVeiculoResult: ObterDadosVeiculoResult;

  constructor() {
    this.detranSoapClient = new DetranSoapClient();
  }

  async getDadosVeiculos( params: any ): Promise<Retorno> {

    this.vehicle = new VeiculoConsulta( params );
    const client = await this.detranSoapClient._client;

    try {
      this.res = await client.ObterDadosVeiculo(this.vehicle);
    } catch (error) {
      this.res = {
        MensagemErro: 'Erro ao obter os dados do veiculo: ' + error,
      };
    }
    this.obterDadosVeiculoResult = new ObterDadosVeiculoResult( this.res.ObterDadosVeiculoResult );

    return new Retorno(this.obterDadosVeiculoResult);
  }

  async getDebitos( params: any ): Promise<Retorno> {

    this.vehicle = new VeiculoConsulta(params);
    const client = await this.detranSoapClient._client;

    try {
      this.res = await client.ObterDebitos(this.vehicle);
    } catch (error) {
      this.res = {
        MensagemErro: 'Erro ao obter debitos: ' + error,
      };
    }

    return new Retorno(this.res.ObterDebitosResult);
  }

  async getDebitosPreview( params: any ): Promise<Retorno> {

    this.vehicle = new VeiculoConsulta(params);
    const client = await this.detranSoapClient._client;

    try {
      this.res = await client.ObterTiposDebitos(this.vehicle);
    } catch (error) {
      this.res = {
        MensagemErro: 'Erro ao buscar debitos: ' + error,
      };
    }

    return new Retorno(this.res.ObterTiposDebitosResult);
  }

  async getTiposDebitos( params: any ): Promise<Retorno> {

    this.vehicle = new VeiculoConsulta(params);
    this.vehicle.tipoSelecionado = params.tipo_debito.toUpperCase();
    const client = await this.detranSoapClient._client;

    try {
      this.res = await client.ObterDebitosPorTipoDebito(this.vehicle);
    } catch (error) {
      return new Retorno({
        MensagemErro: 'Erro ao buscar os debitos: ' + error,
      });
    }

    return new Retorno(this.res.ObterDebitosPorTipoDebitoResult);
  }

  async gerarGRU( params: any ): Promise<Retorno>{

    this.vehicle = new VeiculoConsulta(params);
    const client = await this.detranSoapClient._client;
    const array_ids: Array<string> = new Array();

    try{
      const debitos = await this.getDebitos( params );
      for (const debito of debitos.res.Debito.Debito){
        array_ids.push(debito.IdDebito);
      }
    }catch (error) {
      return new Retorno({
        MensagemErro: 'Erro ao buscar os debitos: ' + error,
      });
    }

    this.vehicle.listaDebitos = array_ids.toString();

    try {
      this.res = await client.GerarGuia(this.vehicle);
    } catch (error) {
      this.res = {
        MensagemErro: 'Error ao gerar a GRU: ' + error,
      };
    }

    return new Retorno(this.res.GerarGuiaResult);
  }

}
