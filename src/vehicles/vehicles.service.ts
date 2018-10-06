import { Injectable } from '@nestjs/common';
import * as request from 'request-promise';
const builder = require('xmlbuilder');

@Injectable()
export class VehiclesService {
  private readonly url = 'http://requestbin.fullcontact.com/u4yaidu4';

  async getTickets(place, owner_document, vehicle_document): Promise<String> {
    var xml = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">  <soap:Header>    <SegurancaDetran xmlns="http://tempuri.org/">      <Usuario>'+process.env.DETRAN_USER+'</Usuario>      <Senha>'+process.env.DETRAN_PASS+'</Senha>    </SegurancaDetran>  </soap:Header>  <soap:Body>    <ObterDebitos xmlns="http://tempuri.org/">      <veiculoConsulta>        <Placa>ABC1234</Placa>       <CPF>12345678910</CPF>        <Renavam>10987654321</Renavam>      </veiculoConsulta>    </ObterDebitos>  </soap:Body></soap:Envelope>'
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
