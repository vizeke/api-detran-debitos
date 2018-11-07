import { Injectable, HttpStatus } from '@nestjs/common';
import { DetranSoapClient } from './detran-soap-client';
import { SegurancaDetran } from 'detran/models/segurancaDetran.model';
import { Veiculo } from 'detran/models/veiculo.model';
// import { VeiculoInfo } from 'detran/models/veiculoInfo.model';
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

  async getDadosVeiculos( placa, doc_proprietario): Promise<Retorno> {

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

  async gerarGRU( placa, doc_proprietario, lista_id_debitos ){

    this.vehicle = {
      listaDebitos: lista_id_debitos,
      veiculoConsulta: new Veiculo({
        Placa: placa,
        CPF: doc_proprietario,
      }),
    };

    this.res = await this.detranSoapClient._client
      .then(client => client.GerarGuia(this.vehicle))
      .then(response => {
        return response;
      }).catch();

    // console.log('RES >> ', this.res);
    return this.res; // new Retorno(this.res.GerarGuiaResponse);
  }
}
