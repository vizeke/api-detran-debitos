
export class DetranConfig {
    readonly sit: any;
    readonly detranNet: any;
    readonly debitosWS: any;

    constructor(){
        this.sit = {
            SPDadosCNH: 'getDadosGeraisCNH',
            SPInfracoes: 'getConsultaInfracoes_Publico',
            SPDadosCondutor: 'getDadosCondutor_AcessoCidadao',
            sqlConnectionConfig: {
                user: process.env.SIT_USER,
                password: process.env.SIT_PASSWORD,
                server: process.env.SIT_SERVER,
                database: process.env.SIT_DB,
                connectionTimeout: 15000,
                requestTimeout: 30000,
                pool: {
                    max: 10,
                    min: 0,
                    idleTimeoutMillis: 30000,
                },
            },
        };
    }

}