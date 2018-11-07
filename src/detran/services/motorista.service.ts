import { Injectable } from '@nestjs/common';
import { DetranConfig } from '../common/config/detran.config';
import { Connection } from 'typeorm';
import * as sql from 'mssql';
declare function require(name: string);

// const sql = require( 'mssql' );
const detran = new DetranConfig();

const SP_DADOS_CNH = detran.sit.SPDadosCNH;
const SP_INFRACOES = detran.sit.SPInfracoes;
const SP_DADOS_CONDUTOR = detran.sit.SPDadosCondutor;
const config = detran.sit.sqlConnectionConfig;
// const connection = sql.createConnection( config );

@Injectable()
export class MotoristaService {
    // const sql = require( 'mssql' );

    // constructor(private readonly connection: Connection){ }
    async getDadosGeraisCNH(){

        // console.log('CONNECTION >> ', this.connection);
        // console.log('SPDADOSCNH >> ', SP_DADOS_CNH);

        // return await this.connection.connect()
        // .then( conn => {
        //     return new sql.Request( conn )
        //         .input( 'CPF', sql.Numeric, 12345678910 )
        //         .input( 'NumRegistroCNH', sql.Numeric, 12345678910 )
        //         .input( 'NumCedula', sql.Numeric, 123456789 )
        //         .execute( SP_DADOS_CNH );
        // })
        // .then( recordsets => {
        //     this.connection.close();
        //     return recordsets[ 0 ][ 0 ];
        // } )
        // .catch( err => {
        //     this.connection.close();
        //     return Promise.reject( err );
        // } );

        return 'Em desenvolvimento';
    }
}
