import { Injectable } from '@nestjs/common';
import { DetranSoapClient } from './detran-soap-client';

const builder = require('xmlbuilder');
const parser = require('xml2json');

@Injectable()
export class VehiclesService {
  detranSoapClient: DetranSoapClient

  constructor() {
    this.detranSoapClient = new DetranSoapClient;
  }

  async searchVehicle(plate, owner_document): Promise<JSON> {

    const vehicle = {
      veiculoConsulta: {
        Placa: plate,
        CPF: owner_document
      }
    };

    return await this.detranSoapClient._client
      .then(client => client.ObterDadosVeiculo(vehicle))
      .then(response => {
        return response;
      })
      .catch(console.error);
    
  }

  async getTickets(plate, owner_document): Promise<JSON> {

    const vehicle = {
      veiculoConsulta: {
        Placa: plate,
        CPF: owner_document
      }
    };

    return await this.detranSoapClient._client
      .then(client => client.ObterDebitos(vehicle))
      .then(response => {

        return response;
      })
      .catch(console.error);
  }
}
