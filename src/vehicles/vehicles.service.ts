import { Injectable } from '@nestjs/common';
import * as request from 'request-promise';
const builder = require('xmlbuilder');

@Injectable()
export class VehiclesService {
  private readonly url = 'http://requestbin.fullcontact.com/1c5uq3c1';

  async getTickets(place, owner_document, vehicle_document): Promise<JSON> {
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
          .ele("Placa", place).up()
          .ele("CPF", owner_document).up()
          .ele("Renavam", vehicle_document).up()
          .up()
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
    return request.post(options);
  }
}
