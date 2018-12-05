import { ApiModelProperty } from '@nestjs/swagger';

export class VeiculoRetorno {
    @ApiModelProperty()
    placa: string;

    @ApiModelProperty()
    modelo: string;

    @ApiModelProperty()
    renavam: number;

    @ApiModelProperty()
    mensagemErro: string;

    constructor(params: any) {
        if (Object.keys(params)[0] === 'MensagemErro'){
            this.mensagemErro = params.MensagemErro;
        }else {
            this.placa = 'CAR1234';
            this.modelo = 'UNO DA FIRMA';
            this.renavam = 12345678910;
        }
    }
}