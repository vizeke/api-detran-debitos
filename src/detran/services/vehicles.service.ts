import { Injectable, HttpStatus } from '@nestjs/common';
import { DetranSoapClient } from './detran-soap-client';

// const builder = require('xmlbuilder');
// const parser = require('xml2json');

@Injectable()
export class VehiclesService {
  detranSoapClient: DetranSoapClient;
  res: any;

  constructor() {
    this.detranSoapClient = new DetranSoapClient();
  }

  async getDataVehiclesDB( plate, owner_document){

    return 'Em desenvolvimento';
  }

  async getDataVehiclesWS( plate, owner_document){
    /**
     * TO DO
     * achar uma forma melhor de encapsular isso
     */
    const vehicle = {
      veiculoConsulta: {
        Placa: plate,
        CPF: owner_document,
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

  async getDebits(plate, owner_document): Promise<JSON> {

    const vehicle = {
      veiculoConsulta: {
        Placa: plate,
        CPF: owner_document,
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

  async getDebitsPreview(plate, owner_document): Promise<JSON> {

    const vehicle = {
      veiculoConsulta: {
        Placa: plate,
        CPF: owner_document,
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

  async getTypeDebits( plate, owner_document, type_debits ){

    const vehicle = {
      veiculoConsulta: {
        Placa: plate,
        CPF: owner_document,
      },
      tipoSelecionado: type_debits,
    };

    this.res = await this.detranSoapClient._client
      .then(client => client.ObterDebitosPorTipoDebito(vehicle))
      .then(response => {
        return response;
      })
      .catch(console.error);

    return this.res.ObterDebitosPorTipoDebitoResult;
  }
}
