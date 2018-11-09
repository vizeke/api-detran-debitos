import { Injectable, HttpStatus } from '@nestjs/common';
import { DetranSoapClient } from './detran-soap-client';
import { SegurancaDetran } from 'detran/models/segurancaDetran.model';
import { Veiculo } from 'detran/models/veiculo.model';
// import { VeiculoInfo } from 'detran/models/veiculoInfo.model';
import { Retorno } from 'detran/models/retorno';
import { ObjetoGerarGuiaResult } from 'detran/models/objetoGerarGuiaResult.model';
import { Any } from 'typeorm';

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

  async getDadosVeiculos( placa, doc_proprietario): Promise<any> {
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
    })
    .catch();

    console.log('RES >> ', this.res );
    // return new Retorno(this.res.ObterDadosVeiculoResult);
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

  async gerarGRU( placa, doc_proprietario, lista_id_debitos, tipo_debito ){

    this.vehicle = {
      listaDebitos: lista_id_debitos,
      veiculoConsulta: new Veiculo({
        Placa: placa,
        CPF: doc_proprietario,
      }),
    };

    const validacao = await this.validarListaDebitos(placa, doc_proprietario, lista_id_debitos, tipo_debito);
    console.log('VALIDACAO >> ', validacao);

    console.log(this.vehicle);
    this.res = await this.detranSoapClient._client
      .then(client => client.GerarGuia(this.vehicle))
      .then(response => {
        return response;
      }).catch();

    // const o = new ObjetoGerarGuiaResult(this.res.GerarGuiaResult);
    // o.contarItem();
    console.log(this.res);
    return new Retorno(this.res.GerarGuiaResult);
  }

  async validarListaDebitos(placa: string, doc_proprietario: string, lista_id_debitos: string, tipo_debito: string){

    const debitos: any = await this.getTypeDebits(placa, doc_proprietario, tipo_debito);

    const array_ids = lista_id_debitos.split(',');
    console.log('IDs >> ', array_ids);

    // if (array_)
    for (let index = 0; index < array_ids.length; index++) {
      const element = array_ids[index];
      console.log('ELEMENT >> ', element);
      if (debitos.res.Debito.Debito.includes(element)){
        console.log('IF >> ', debitos.res.Debito.Debito.includes(element));
        return false;
      }
    }

    return true;
  }

}
