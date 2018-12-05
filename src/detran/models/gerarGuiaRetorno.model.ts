import { ItemGuia } from './itemGuia.model';

export class GerarGuiaRetorno {

    guia: Array<ItemGuia>;
    mensagemErro: string;
    guiaPDF: string;

    constructor(gerar_guia: any) {

        if (Object.keys(gerar_guia)[0] === 'MensagemErro') {
            this.mensagemErro = gerar_guia.MensagemErro;
        } else if (gerar_guia === null || gerar_guia === undefined) {
            this.mensagemErro = 'Erro ao gerar guia.';
        } else {
            this.guia = new Array();
            for ( const item of gerar_guia.Guia.ItemGuia ){
                this.guia.push(new ItemGuia(item));
            }
            this.guiaPDF = gerar_guia.GuiaPDF;
        }
    }
}