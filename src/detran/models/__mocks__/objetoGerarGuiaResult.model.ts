import { ItemGuia } from './itemGuia.model';
import { ColumnNumericOptions } from 'typeorm/decorator/options/ColumnNumericOptions';

export class ObjetoGerarGuiaResult {
    guia: any;
    mensagemErro: string;
    guiaPDF: string; // em base64Binary
    item: ItemGuia;

    constructor(resposta: any){
        this.guia = { ItemGuia: [
            {
                LinhaDigitavel: '85820000000-7  19640219201-0  81130002018-6  80100847395-0',
                CodigoBarra: '85820000000196402192018113000201880100847395',
                ValorGuia: '19.6400',
                Postagem: true,
                Nome: 'TESTE',
                Placa: 'ROU8470',
                Renavam: 225608235,
                Marca: 'RENAULT/CLIO EXP 10 16VH',
                Nossonumero: '00201880100847395',
                Vencimentoguia: '2018-11-30T02:00:00.000Z',
                Tiporegistro: 1,
                Classe: 1,
                Descricaoservico: 'Postagem do CRLV 2018',
                Datavencimento: '2018-04-13T03:00:00.000Z',
                Valorvencimento: '19.6400',
                Valorcorrigido: '19.6400',
                Valordesconto: '0.0000',
                Valorjuros: '0.0000',
                Valormulta: '0.0000',
                Valoratualizadofranquia: '19.6400',
                Dataautuacao: '',
                Horaautuacao: '00:00',
                Valorauto: '0',
            },
            ],
        },
        this.guiaPDF = 'THIS0IS0A0PDF';

    }

    i: number = 0;
    contarItem(){

        while (this.guia[this.i]){
            this.item = new ItemGuia(this.guia[this.i]);
            this.i = this.i + 1;
        }
    }
}