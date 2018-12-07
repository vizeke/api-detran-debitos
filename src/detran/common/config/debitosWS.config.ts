let wsurl: string;
const userWS: string = process.env.DETRAN_USER;
const passWS: string = process.env.DETRAN_PASS;

if ( process.env.NODE_ENV !== 'production'){
    wsurl = 'http://novo.detrannet.dchm.es.gov.br/wsInternetbanking/serviceInternetBanking.asmx?wsdl';
}else {
    wsurl = 'https://api.detran.es.gov.br/wsinternetbanking/serviceInternetBanking.asmx?wsdl';
}

export class DebitosWS {
    serviceUrl: string;
    user: string;
    password: string;

    constructor(){
        this.serviceUrl = wsurl;
        this.user = userWS;
        this.password = passWS;
    }
}