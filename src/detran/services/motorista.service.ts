import { Injectable } from '@nestjs/common';
import { DetranConfig } from 'detran/common/config/detran.config';
import * from 'mysql';
declare function require(name: string);

const sql = require( 'mssql' );
const detran = new DetranConfig();

const SP_DADOS_CNH = detran.sit.SPDadosCNH;
const SP_INFRACOES = detran.sit.SPInfracoes;
const SP_DADOS_CONDUTOR = detran.sit.SPDadosCondutor;
const config = detran.sit.sqlConnectionConfig;
const connection = new sql.Connection( config );

@Injectable()
export class MotoristaService {
    const sql = require( 'mssql' );

    constructor(){ }
    async getDadosGeraisCNH(){

        return connection.connect()
        .then( conn => {
            return new sql.Request( conn )
                .input( 'CPF', sql.Numeric, 12345678910 )
                .input( 'NumRegistroCNH', sql.Numeric, 12345678910 )
                .input( 'NumCedula', sql.Numeric, 123456789 )
                .execute( SP_DADOS_CNH );
        } )
        .then( recordsets => {
            connection.close();
            return recordsets[ 0 ][ 0 ];
        } )
        .catch( err => {
            connection.close();
            return Promise.reject( err );
        } );
    }
}
