import { Injectable } from '@nestjs/common';
import * as soap from 'soap-as-promised';
import { SegurancaDetran } from 'detran/models/segurancaDetran.dto';

// const detran = require('../config/detran');
// const app = require('../config/app');

@Injectable()
export class DetranSoapClient {
    private readonly serviceUrl = process.env.DETRAN_URL;
    _client: any;
    private readonly segurancaDetran = new SegurancaDetran();

    constructor() {

        this._client = soap.createClient(this.serviceUrl).then(client => {
            client.addSoapHeader(
                {
                    SegurancaDetran: new SegurancaDetran(),
                },
                undefined,
                '__tns__',
                'http://tempuri.org/',
            );
            return client;
        });
    }
}
