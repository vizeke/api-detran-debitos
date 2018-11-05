
export class SegurancaDetran {
    Usuario: any;
    Senha: any;

    constructor(){
        this.Usuario = process.env.DETRAN_USER;
        this.Senha = process.env.DETRAN_PASS;
    }
}