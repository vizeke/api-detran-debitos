import { ItemGuia } from './itemGuia.model';

export class GerarGuiaRetorno {

    guia: Array<ItemGuia>;
    mensagemErro: string;
    guiaPDF: string;

    constructor(gerar_guia: any) {

        this.guia = new Array();
        this.guia.push(new ItemGuia(gerar_guia));
        this.guiaPDF = 'PeDeEfe';
    }
}