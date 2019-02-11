import { DebitosWS } from '../common/config/debitosWS.config';

const debitosWS: DebitosWS = new DebitosWS();
export class SegurancaDetran {
  Usuario: any;
  Senha: any;

  constructor() {
    this.Usuario = debitosWS.user || 'usuario';
    this.Senha = debitosWS.password || 'senhacomplicada';
  }
}
