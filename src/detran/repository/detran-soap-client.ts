import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as soap from 'soap-as-promised';
import { SegurancaDetran } from '../models/segurancaDetran.model';

const wsurl: string = process.env.DETRAN_URL;
console.log(wsurl, '\n', process.env.DETRAN_USER, ' ', process.env.DETRAN_PASS);

@Injectable()
export class DetranSoapClient {
    private readonly serviceUrl =  wsurl;
    _client: any;

    constructor() {

        this._client = soap.createClient(this.serviceUrl)
        .then(client => {
            client.addSoapHeader(
                {
                    SegurancaDetran: new SegurancaDetran(),
                },
                undefined,
                '__tns__',
                'http://tempuri.org/',
            );
            return client;
        }).catch(error => {
            console.error(error);
            return {
                mensagemErro: 'Erro em conectar ao repositorio. Error: ' + error,
            };
        });
    }
}
