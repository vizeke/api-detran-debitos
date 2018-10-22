import { Injectable, HttpStatus } from '@nestjs/common';
import { DetranSoapClient } from './detran-soap-client';

//const builder = require('xmlbuilder');
//const parser = require('xml2json');

@Injectable()
export class VehiclesService {
  detranSoapClient: DetranSoapClient;
  res: any;

  constructor() {
    this.detranSoapClient = new DetranSoapClient();
  }

  async searchVehicle(plate, owner_document){
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

    // this.res = JSON.stringify(this.res);
    // let res2 = this.res.ObterDadosVeiculoResult;
    // console.log('OBJECT.KEYS >>>>>>>> ', Object.keys(this.res.ObterDadosVeiculoResult));
    // console.log('OBJECT.VALUES >>>>>>>> ', Object.values(this.res.ObterDadosVeiculoResult));
    // console.log('OBJECT.ENTRIES >>>>>>>> ', Object.entries(this.res.ObterDadosVeiculoResult));

    switch (Object.keys(this.res.ObterDadosVeiculoResult)) {
      case (['VeiculoInfo']):
        console.log('\n\nVeiculoinfo\n\n');
        break;
      default:
      console.log('\n\nEntrou\n\n');
    }
    // console.log('RES >>>>>>>> ', this.res.ObterDadosVeiculoResult);

    return this.res;
      /** TODO Retornar uma exceção */
  }

  async getTickets(plate, owner_document): Promise<JSON> {

    const vehicle = {
      veiculoConsulta: {
        Placa: plate,
        CPF: owner_document,
      },
    };

    return await this.detranSoapClient._client
      .then(client => client.ObterDebitos(vehicle))
      .then(response => {
        return response;
      })
      .catch(console.error);
  }
}
