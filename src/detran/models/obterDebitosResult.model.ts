import { Debito } from './debito.model';
import { ApiModelProperty } from '@nestjs/swagger';

export class ObterDebitosResult {
    @ApiModelProperty()
    debitos: Array<Debito>;

    @ApiModelProperty()
    mensagemErro: string;

    constructor(readonly params) {
    }
}