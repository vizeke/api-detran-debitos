import { Injectable } from '@nestjs/common';
import * as request from 'request-promise';

const builder = require('xmlbuilder');
const parser = require('xml2json');

@Injectable()
export class VehiclesService {
  private readonly url = process.env.DETRAN_URL;

  async searchVehicle(plate, owner_document): Promise<JSON> {

    const xml = builder.begin({encoding: 'utf-8'})
    .ele('soap:Envelope', {'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
                          'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema',
                          'xmlns:soap': 'http://schemas.xmlsoap.org/soap/envelope/'
                          })
      .ele('soap:Header')
        .ele('SegurancaDetran', {'xmlns': 'http://tempuri.org/'})
          .ele('Usuario', process.env.DETRAN_USER ).up()
          .ele('Senha', process.env.DETRAN_PASS ).up()
        .up()
      .up()
      .ele('soap:Body')
        .ele('ObterDadosVeiculo', {'xmlns': 'http://tempuri.org/'})
          .ele('veiculoConsulta')
          .ele('Placa', plate).up()
          .ele('CPF', owner_document).up()
        .up()
      .up()
    .end({ pretty: true});

    const optionsPost = {
          uri: this.url,
          body: xml,
          json: false,
          headers: {
            'User-Agent': 'Request-Promise',
            'Content-Type': 'text/xml',
            'Content-Length': Buffer.byteLength(xml),
          },
    };

    const options2Json = {
      object: true,
    };

    let req = await request.post(optionsPost);

    req = parser.toJson(req, options2Json);

    /**
     * TO DO
     * Ver como fazer para veiculos com registro de furto/roubo ativo
     * Placa ABC1234
     * CPF 12345678910
     * {
     *  'soap:Envelope': {
     *    'xmlns:soap': 'http://schemas.xmlsoap.org/soap/envelope/',
     *    'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
     *    'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema',
     *    'soap:Body': {
     *      'ObterDadosVeiculoResponse': {
     *        'xmlns': 'http://tempuri.org/',
     *          'ObterDadosVeiculoResult': {
     *            'MensagemErro': 'Consulta não permitida para veículo com registro de furto/roubo ativo'
     *          }
     *        }
     *      }
     *    }
     *  }
     */

    return req['soap:Envelope']['soap:Body']['ObterDadosVeiculoResponse']['ObterDadosVeiculoResult']['VeiculoInfo'];
  }

  async getTickets(plate, owner_document): Promise<JSON> {
    const xml = builder.begin({encoding: 'utf-8'})
    .ele('soap:Envelope', {'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
                           'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema',
                           'xmlns:soap': 'http://schemas.xmlsoap.org/soap/envelope/'
                          })
      .ele('soap:Header')
        .ele('SegurancaDetran', {'xmlns': 'http://tempuri.org/'})
        .ele('Usuario', process.env.DETRAN_USER ).up()
        .ele('Senha', process.env.DETRAN_PASS ).up()
        .up()
      .up()
      .ele('soap:Body')
        .ele('ObterDebitos', {'xmlns': 'http://tempuri.org/'})
          .ele('veiculoConsulta')
          .ele('Placa', plate).up()
          .ele('CPF', owner_document).up()
        .up()
      .up()
    .end({ pretty: true});

    const optionsPost = {
          uri: this.url,
          body: xml,
          json: false,
          headers: {
            'User-Agent': 'Request-Promise',
            'Content-Type': 'text/xml',
            'Content-Length': Buffer.byteLength(xml),
            'SOAPAction': 'http://tempuri.org/ObterDebitos',
          },
    };

    const options2Json = {
      object: true,
    };

    let req = await request.post(optionsPost);

    req = parser.toJson(req, options2Json);
    return req['soap:Envelope']['soap:Body']['ObterDebitosResponse']['ObterDebitosResult']['Debito'];
  }
}
