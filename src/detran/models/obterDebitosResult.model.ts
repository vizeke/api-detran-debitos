import { Debito } from './debito.model';

export class ObterDebitosResult {
    debito: Array<Debito>;
    mensagemErro: string;

    constructor(readonly params) {
    }
}