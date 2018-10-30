
export class DebitosWS {
    private readonly serviceUrl: string;
    private readonly user: string;
    private readonly password: string;

    constructor(){
        this.serviceUrl = 'http://novo.detrannet.dchm.es.gov.br/wsInternetbanking/serviceInternetBanking.asmx?wsdl';
        this.user = process.env.DETRAN_USER;
        this.password = process.env.DETRAN_PASS;
    }
}