import { ItemGuia } from './itemGuia.model';

export class GerarGuiaRetorno {

    itensGuia: Array<ItemGuia>;
    mensagemErro: string;
    guiaPDF: string;

    constructor(gerar_guia: any) {

        this.itensGuia = new Array();
        this.itensGuia.push(new ItemGuia(gerar_guia));
        this.guiaPDF = 'PeDeEfe';
    }
}