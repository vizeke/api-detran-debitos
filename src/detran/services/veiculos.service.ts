import { Injectable, HttpStatus } from '@nestjs/common';
import { DetranSoapClient } from './detran-soap-client';

// const builder = require('xmlbuilder');
// const parser = require('xml2json');

@Injectable()
export class VeiculosService {
  detranSoapClient: DetranSoapClient;
  res: any;

  constructor() {
    this.detranSoapClient = new DetranSoapClient();
  }

  async getDataVeiculosDB( placa, doc_proprietario){
    return 'Em desenvolvimento';
  }

  async getDataVeiculosWS( placa, doc_proprietario){
    /**
     * TO DO
     * achar uma forma melhor de encapsular isso
     */
    const vehicle = {
      veiculoConsulta: {
        Placa: placa,
        CPF: doc_proprietario,
      },
    };

    this.res = await this.detranSoapClient._client
      .then(client => client.ObterDadosVeiculo(vehicle))
      .then(response => {
        return response;
      }).catch();
      /**
       * TO DO catch
       */

    return this.res.ObterDadosVeiculoResult;
  }

  async getDebits(placa, doc_proprietario): Promise<JSON> {

    const vehicle = {
      veiculoConsulta: {
        Placa: placa,
        CPF: doc_proprietario,
      },
    };

    this.res = await this.detranSoapClient._client
      .then(client => client.ObterDebitos(vehicle))
      .then(response => {
        return response;
      })
      .catch(console.error);

    return this.res.ObterDebitosResult;
  }

  async getDebitsPreview(placa, doc_proprietario): Promise<JSON> {

    const vehicle = {
      veiculoConsulta: {
        Placa: placa,
        CPF: doc_proprietario,
      },
    };

    this.res = await this.detranSoapClient._client
      .then(client => client.ObterTiposDebitos(vehicle))
      .then(response => {
        return response;
      })
      .catch(console.error);

    return this.res.ObterTiposDebitosResult;
  }

  async getTypeDebits( placa, doc_proprietario, tipo_debito ){

    const vehicle = {
      veiculoConsulta: {
        Placa: placa,
        CPF: doc_proprietario,
      },
      tipoSelecionado: tipo_debito,
    };

    /**
     * TO DO uppercase em tipoSelecionado
     */
    
    this.res = await this.detranSoapClient._client
      .then(client => client.ObterDebitosPorTipoDebito(vehicle))
      .then(response => {
        return response;
      })
      .catch(console.error);

    return this.res.ObterDebitosPorTipoDebitoResult;
  }
}
