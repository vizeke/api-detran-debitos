import { Injectable } from '@nestjs/common';
import { DetranSoapClient } from '../repository/detran-soap-client';
import { Retorno } from '../models/retorno';
import { VeiculoConsulta } from '../models/veiculoConsulta.model';
import { VeiculoRetorno } from '../models/veiculoRetorno';

@Injectable()
export class VeiculosService {
  detranSoapClient: DetranSoapClient;
  res: any;
  veiculoConsulta: any;
  veiculoRetorno: VeiculoRetorno;
  client: any;

  constructor() {
    this.detranSoapClient = new DetranSoapClient();
  }

  async getDadosVeiculos( params: any ): Promise<Retorno> {

    this.veiculoConsulta = new VeiculoConsulta( params );
    this.client = await this.detranSoapClient._client;

    try {
      this.res = await this.client.ObterDadosVeiculo(this.veiculoConsulta);
      if (Object.keys(this.res.ObterDadosVeiculoResult)[0] === 'MensagemErro'){
        return new Retorno(this.res.ObterDadosVeiculoResult);
      }else{
        this.veiculoRetorno = new VeiculoRetorno(this.res.ObterDadosVeiculoResult);
        return new Retorno(this.veiculoRetorno);
      }
    } catch (error) {
      return new Retorno ({
          MensagemErro: 'Erro ao obter os dados do veiculo: ' + error,
        },
      );
    }
  }

  async getDebitos( params: any ): Promise<Retorno> {

    this.veiculoConsulta = new VeiculoConsulta(params);
    this.client = await this.detranSoapClient._client;

    try {
      this.res = await this.client.ObterDebitos(this.veiculoConsulta);
      return new Retorno(this.res.ObterDebitosResult.Debito);
    } catch (error) {
      return new Retorno({
          MensagemErro: 'Erro ao obter debitos: ' + error,
        },
      );
    }
  }

  async getDebitosPreview( params: any ): Promise<Retorno> {

    this.veiculoConsulta = new VeiculoConsulta(params);
    this.client = await this.detranSoapClient._client;

    try {
      this.res = await this.client.ObterTiposDebitos(this.veiculoConsulta);
      return new Retorno(this.res.ObterTiposDebitosResult);
    } catch (error) {
      return new Retorno({
          MensagemErro: 'Erro ao buscar debitos: ' + error,
        },
      );
    }
  }

  async getTiposDebitos( params: any ): Promise<Retorno> {

    this.veiculoConsulta = new VeiculoConsulta(params);
    this.veiculoConsulta.tipoSelecionado = params.tipo_debito.toUpperCase();
    this.client = await this.detranSoapClient._client;

    try {
      this.res = await this.client.ObterDebitosPorTipoDebito(this.veiculoConsulta);
      return new Retorno(this.res.ObterDebitosPorTipoDebitoResult);
    } catch (error) {
      return new Retorno({
        MensagemErro: 'Erro ao buscar os debitos: ' + error,
      });
    }
  }

  async gerarGRU( params: any ): Promise<Retorno>{

    this.veiculoConsulta = new VeiculoConsulta(params);
    this.client = await this.detranSoapClient._client;
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

    this.veiculoConsulta.listaDebitos = array_ids.toString();

    try {
      this.res = await this.client.GerarGuia(this.veiculoConsulta);
    } catch (error) {
      this.res = {
        MensagemErro: 'Error ao gerar a GRU: ' + error,
      };
    }

    return new Retorno(this.res.GerarGuiaResult);
  }

}
