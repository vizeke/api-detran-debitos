import { Injectable } from '@nestjs/common';
import * as request from 'request-promise';
const builder = require('xmlbuilder');
const parser = require('xml2json');

@Injectable()
export class VehiclesService {
  private readonly url = 'http://novo.detrannet.dchm.es.gov.br/wsInternetbanking/serviceInternetBanking.asmx?wsdl';

  async getTickets(plate, owner_document): Promise<JSON> {
    var xml = builder.begin({encoding: "utf-8"})
    .ele('soap:Envelope', {"xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance", "xmlns:xsd": "http://www.w3.org/2001/XMLSchema", "xmlns:soap": "http://schemas.xmlsoap.org/soap/envelope/"})
      .ele('soap:Header')
        .ele("SegurancaDetran", {"xmlns": "http://tempuri.org/"})
          .ele("Usuario", process.env.DETRAN_USER).up()
          .ele("Senha", process.env.DETRAN_PASS).up()
        .up()
      .up()
      .ele('soap:Body')
        .ele('ObterDebitos', {"xmlns": "http://tempuri.org/"})
          .ele('veiculoConsulta')
          .ele("Placa", plate).up()
          .ele("CPF", owner_document).up()
        .up()
      .up()
    .end({ pretty: true});

    const options = {
          uri: this.url,
          body: xml,
          json: false,
          headers: {
            'User-Agent': 'Request-Promise',
            'Content-Type': 'text/xml',
            'Content-Length': Buffer.byteLength(xml)
          },
    };

    var req = await request.post(options);
    
    return parser.toJson(req);
  }

  async searchVehicle(plate, owner_document): Promise<JSON> {

    var xml = builder.begin({encoding: "utf-8"})
    .ele('soap:Envelope', {"xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance", "xmlns:xsd": "http://www.w3.org/2001/XMLSchema", "xmlns:soap": "http://schemas.xmlsoap.org/soap/envelope/"})
      .ele('soap:Header')
        .ele("SegurancaDetran", {"xmlns": "http://tempuri.org/"})
          .ele("Usuario", process.env.DETRAN_USER).up()
          .ele("Senha", process.env.DETRAN_PASS).up()
        .up()
      .up()
      .ele('soap:Body')
        .ele('ObterDadosVeiculo', {"xmlns": "http://tempuri.org/"})
          .ele('veiculoConsulta')
          .ele("Placa", plate).up()
          .ele("CPF", owner_document).up()
        .up()
      .up()
    .end({ pretty: true});

    const options = {
          uri: this.url,
          body: xml,
          json: false,
          headers: {
            'User-Agent': 'Request-Promise',
            'Content-Type': 'text/xml',
            'Content-Length': Buffer.byteLength(xml)
          },
    };
    var req = await request.post(options);
    
    return parser.toJson(req);
  }
}
