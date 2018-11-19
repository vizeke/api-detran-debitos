import { Injectable } from '@nestjs/common';
import * as soap from 'soap-as-promised';
import { SegurancaDetran } from '../models/segurancaDetran.model';

// const detran = require('../config/detran');
// const app = require('../config/app');
let wsurl: string;
if ( process.env.NODE_ENV !== 'production'){
    wsurl = 'http://novo.detrannet.dchm.es.gov.br/wsInternetbanking/serviceInternetBanking.asmx?wsdl';
}else {
    wsurl = 'http://detrannet.es.gov.br/wsinternetbanking/serviceInternetBanking.asmx?wsdl';
}

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
        });
    }
}
