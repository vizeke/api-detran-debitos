import { DetranSoapClient } from '../services/detran-soap-client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DetranSoapClientDTO {
    detranSoapClient: DetranSoapClient;
    status: number;
    res: any;

    constructor() {
        this.detranSoapClient = new DetranSoapClient();
    }

    async createSoapClient(metodo: string, param: any ){
        console.log('METODO >>>', metodo, '\nPARAM >>>', param);
    }
}