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

  async searchVehicle( plate, owner_document){
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

    return this.res.ObterDadosVeiculoResult;
  }

  async getTickets(plate, owner_document): Promise<JSON> {

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
}
