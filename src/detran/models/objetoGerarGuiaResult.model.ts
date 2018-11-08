import { ItemGuia } from './itemGuia.model';
import { ColumnNumericOptions } from 'typeorm/decorator/options/ColumnNumericOptions';

export class ObjetoGerarGuiaResult {
    guia: ItemGuia[];
    mensagemErro: string;
    guiaPDF: string; // em base64Binary
    item: ItemGuia;

    constructor(resposta: any){
        this.guia = resposta.Guia.ItemGuia;
        // console.log('constructor' , this.guia);
    }

    i: number = 0;
    contarItem(){

        while (this.guia[this.i]){
            this.item = new ItemGuia(this.guia[this.i]);
            console.log( this.i, ' >> ', this.item );
            this.i = this.i + 1;

        }
    }
}