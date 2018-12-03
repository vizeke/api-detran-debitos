import { Injectable } from '@nestjs/common';
import { DetranSoapClient } from '../repository/detran-soap-client';
import { Retorno } from '../models/retorno';
import { VeiculoConsulta } from '../models/veiculoConsulta.model';
import { VeiculoRetorno } from '../models/veiculoRetorno';
import { DebitoRetorno } from '../models/debitoRetorno';

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

    try {
      this.res = await this.client.ObterDadosVeiculo(this.veiculoConsulta);
      this.veiculoRetorno = new VeiculoRetorno(this.res.ObterDadosVeiculoResult);
      return new Retorno(this.veiculoRetorno);

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
      console.log('GET-DEBITOS', this.res.ObterDebitosResult);
      this.debitos = new DebitoRetorno(this.res.ObterDebitosResult);
      return new Retorno(this.debitos.debitos);
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
      console.log('TIPO-DEBITOS >>> ', this.res.ObterDebitosPorTipoDebitoResult);
      this.debitos = new DebitoRetorno(this.res.ObterDebitosPorTipoDebitoResult);
      return new Retorno(this.debitos.debitos);
    
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
      const deb: Retorno = await this.getDebitos( params );
      console.log('GRU >>>> ', deb);
      if (deb.res[0] === 'Nenhum debito encontrado.'){
        return new Retorno(deb.res[0]);
      }else{
        for (const debito of deb.res){
          array_ids.push(debito.IdDebito);
        }
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
