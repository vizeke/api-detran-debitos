import { Injectable, HttpStatus } from '@nestjs/common';
import { DetranSoapClient } from '../repository/detran-soap-client';
import { Veiculo } from '../models/veiculo.model';
import { Retorno } from '../models/retorno';

@Injectable()
export class VeiculosService {
  detranSoapClient: DetranSoapClient;
  res: any;
  resposta: any;
  vehicle: any;

  constructor() {
    this.detranSoapClient = new DetranSoapClient();
  }

  async getDadosVeiculos( placa: string, doc_proprietario: string ): Promise<Retorno> {

    this.vehicle = {
      veiculoConsulta: new Veiculo({
        Placa: placa,
        CPF: doc_proprietario,
      }),
    };

    try {
      this.res = await this.detranSoapClient._client
    .then(client => client.ObterDadosVeiculo(this.vehicle))
    .then(response => {
      return response;
    });
    } catch (error) {
      this.res = {
        MensagemErro: 'Erro ao obter os dados do veiculo: ' + error,
      };
    }

    return new Retorno(this.res.ObterDadosVeiculoResult);
  }

  async getDebits(placa: string, doc_proprietario: string): Promise<Retorno> {

    this.vehicle = {
      veiculoConsulta: new Veiculo({
        Placa: placa,
        CPF: doc_proprietario,
      }),
    };

    try {
      this.res = await this.detranSoapClient._client
      .then(client => client.ObterDebitos(this.vehicle))
      .then(response => {
        return response;
      });
    } catch (error) {
      this.res = {
        MensagemErro: 'Erro ao obter debitos: ' + error,
      };
    }

    return new Retorno(this.res.ObterDebitosResult);
  }

  async getDebitsPreview(placa: string, doc_proprietario: string ): Promise<Retorno> {

    this.vehicle = {
      veiculoConsulta: new Veiculo({
        Placa: placa,
        CPF: doc_proprietario,
      }),
    };

    try {
      this.res = await this.detranSoapClient._client
      .then(client => client.ObterTiposDebitos(this.vehicle))
      .then(response => {
        return response;
      });
    } catch (error) {
      this.res = {
        MensagemErro: 'Erro ao buscar debitos: ' + error,
      };
    }

    return new Retorno(this.res.ObterTiposDebitosResult);
  }

  async getTypeDebits( placa: string, doc_proprietario: string, tipo_debito: string ): Promise<Retorno> {

    this.vehicle = {
      veiculoConsulta: new Veiculo({
        Placa: placa,
        CPF: doc_proprietario,
      }),
      tipoSelecionado: tipo_debito.toUpperCase(),
    };
    try {
      this.res = await this.detranSoapClient._client
      .then(client => client.ObterDebitosPorTipoDebito(this.vehicle))
      .then(response => {
        return response;
      });
    } catch (error) {
      return new Retorno({
        MensagemErro: 'Erro ao buscar os debitos: ' + error,
      });
    }

    return new Retorno(this.res.ObterDebitosPorTipoDebitoResult);
  }

  async gerarGRU( params: any ): Promise<Retorno>{

    this.vehicle = {
      veiculoConsulta: new Veiculo({
        Placa: params.placa,
        CPF: params.doc_proprietario,
      }),
    };

    let validacao: boolean;
    const array_ids: Array<string> = new Array();

    if ( params.lista_id_debitos ){
      validacao = await this.validarListaDebitos(params.placa, params.doc_proprietario, params.lista_id_debitos, params.tipo_debito);

    }else{
      try{
        const debitos = await this.getDebits(params.placa, params.doc_proprietario);

        for (const debito of debitos.res.Debito.Debito){
          array_ids.push(debito.IdDebito);
        }
        validacao = true;
      }catch (error) {
        return new Retorno({
          MensagemErro: 'Erro ao buscar os debitos: ' + error,
        });
      }
    }

    this.vehicle.listaDebitos = array_ids.toString();

    console.log('VEHICLE >> ', this.vehicle);

    if (validacao){
      try {
        this.res = await this.detranSoapClient._client
        .then(client => client.GerarGuia(this.vehicle))
        .then(response => {
          return response;
        }).catch(err => {
          return err;
        });
      } catch (error) {
        this.res = {
          MensagemErro: 'Error ao gerar a GRU: ' + error,
        };
      }
    }else{
      this.res = {
        MensagemErro: 'É necessário escolher todos os debitos obrigatorios',
      };
    }

    return new Retorno(this.res.GerarGuiaResult);
  }

  async validarListaDebitos(placa: string, doc_proprietario: string, lista_id_debitos: string, tipo_debito: string){

    return true;
  }

}
