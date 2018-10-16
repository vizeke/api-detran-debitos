import { Injectable } from "@nestjs/common";
import * as soap from 'soap-as-promised';

// const detran = require('../config/detran');
// const app = require('../config/app');

@Injectable()
export class DetranSoapClient {
    private readonly serviceUrl = process.env.DETRAN_URL;
    private DETRAN_USER = process.env.DETRAN_USER
    private DETRAN_PASS = process.env.DETRAN_PASS
    _client: any;

    constructor() {
        this._client = soap.createClient(this.serviceUrl).then(client => {
            client.addSoapHeader(
                {
                    SegurancaDetran: {
                        Usuario: this.DETRAN_USER,
                        Senha: this.DETRAN_PASS
                    }
                },
                undefined,
                '__tns__',
                'http://tempuri.org/'
            );
            return client;
        });
    }
}
