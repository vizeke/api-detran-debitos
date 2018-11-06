
export class DebitosWS {
    private readonly serviceUrl: string;
    private readonly user: string;
    private readonly password: string;

    constructor(){
        this.serviceUrl = process.env.DETRAN_URL;
        this.user = process.env.DETRAN_USER;
        this.password = process.env.DETRAN_PASS;
    }
}