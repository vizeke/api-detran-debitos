import { ItemGuia } from './itemGuia.model';
import { ColumnNumericOptions } from 'typeorm/decorator/options/ColumnNumericOptions';

export class ObjetoGerarGuiaResult {
    guia: any;
    mensagemErro: string;
    guiaPDF: string; // em base64Binary
    item: ItemGuia;

    constructor(resposta: any){
    }

    i: number = 0;
    contarItem(){

        while (this.guia[this.i]){
            this.item = new ItemGuia(this.guia[this.i]);
            // console.log( this.i, ' >> ', this.item );
            this.i = this.i + 1;

        }
    }
}