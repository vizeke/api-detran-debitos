const wsurl: string = process.env.DETRAN_URL;
const userWS: string = process.env.DETRAN_USER;
const passWS: string = process.env.DETRAN_PASS;

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