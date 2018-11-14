
export class DebitosWS {
    serviceUrl: string;
    user: string;
    password: string;

    constructor(){
        this.serviceUrl = process.env.DETRAN_URL;
        this.user = process.env.DETRAN_USER;
        this.password = process.env.DETRAN_PASS;
    }
}