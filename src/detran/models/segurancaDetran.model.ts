import { DebitosWS } from '../common/config/debitosWS.config';

// const debitosWS: DebitosWS = new DebitosWS();
export class SegurancaDetran {
    Usuario: any;
    Senha: any;

    constructor(){
        this.Usuario = process.env.DETRAN_USER || 'usuario';
        this.Senha = process.env.DETRAN_PASS || 'senhacomplicada';
    }
}