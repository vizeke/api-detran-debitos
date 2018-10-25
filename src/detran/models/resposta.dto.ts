

export class Resposta {
    public res: any;
    public status: number;
    public mensagemErro: string;

    constructor(resposta: any){
        this.res = resposta;
    }

    async defineHttpStatusCode(){

        switch (Object.keys(this.res)[0]) {
            case ('VeiculoInfo'):
            this.status = 200;
            break;
            case ('MensagemErro'):
            this.status = 204;
            break;
            default:
            // console.log('\n\nEntrou\n\n');
        }

    }
}