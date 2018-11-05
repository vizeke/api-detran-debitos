import { Injectable, HttpStatus } from '@nestjs/common';
import { DetranSoapClient } from './detran-soap-client';
import { SegurancaDetran } from 'detran/models/segurancaDetran.dto';
import { Veiculo } from 'detran/models/veiculo.dto';
import { VeiculoInfo } from 'detran/models/veiculoInfo.dto';
import { Retorno } from 'detran/models/retorno';

// const builder = require('xmlbuilder');
// const parser = require('xml2json');

@Injectable()
export class VeiculosService {
  detranSoapClient: DetranSoapClient;
  res: any;
  resposta: any;
  vehicle: any;
  err: Error;

  constructor() {
    this.detranSoapClient = new DetranSoapClient();
  }

  /**
   * Para testes
   */
  async testService( placa, doc_proprietario){
    const teste = new SegurancaDetran();
    return teste;
    // return 'Em desenvolvimento';
  }

  async getDataVeiculosWS( placa, doc_proprietario): Promise<Retorno> {

    this.vehicle = {
      veiculoConsulta: new Veiculo({
        Placa: placa,
        CPF: doc_proprietario,
      }),
    };

    this.res = await this.detranSoapClient._client
      .then(client => client.ObterDadosVeiculo(this.vehicle))
      .then(response => {
        return response;
      }).catch();
      /**
       * TO DO catch
       */

    return new Retorno(this.res.ObterDadosVeiculoResult);
  }

  async getDebits(placa, doc_proprietario): Promise<Retorno> {

    this.vehicle = {
      veiculoConsulta: new Veiculo({
        Placa: placa,
        CPF: doc_proprietario,
      }),
    };

    this.res = await this.detranSoapClient._client
      .then(client => client.ObterDebitos(this.vehicle))
      .then(response => {
        return response;
      })
      .catch();

    return new Retorno(this.res.ObterDebitosResult);
  }

  async getDebitsPreview(placa, doc_proprietario): Promise<Retorno> {

    this.vehicle = {
      veiculoConsulta: new Veiculo({
        Placa: placa,
        CPF: doc_proprietario,
      }),
    };

    this.res = await this.detranSoapClient._client
      .then(client => client.ObterTiposDebitos(this.vehicle))
      .then(response => {
        return response;
      })
      .catch();

    return new Retorno(this.res.ObterTiposDebitosResult);
  }

  async getTypeDebits( placa, doc_proprietario, tipo_debito ){

    this.vehicle = {
      veiculoConsulta: new Veiculo({
        Placa: placa,
        CPF: doc_proprietario,
      }),
      tipoSelecionado: tipo_debito.toUpperCase(),
    };

    this.res = await this.detranSoapClient._client
      .then(client => client.ObterDebitosPorTipoDebito(this.vehicle))
      .then(response => {
        return response;
      }).catch();

    return new Retorno(this.res.ObterDebitosPorTipoDebitoResult);
  }
}
