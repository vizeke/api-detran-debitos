import { ApiModelProperty } from '@nestjs/swagger';

export class VeiculoRetorno {
    @ApiModelProperty()
    plate: string;

    @ApiModelProperty()
    model: string;

    @ApiModelProperty()
    renavam: number;

    @ApiModelProperty()
    mensagemErro: string;

    constructor(params: any) {
        if (Object.keys(params)[0] === 'MensagemErro'){
            this.mensagemErro = params.MensagemErro;
        }else {
            this.plate = params.VeiculoInfo.Veiculo.Placa;
            this.model = params.VeiculoInfo.MarcaModelo;
            this.renavam = params.VeiculoInfo.Veiculo.Renavam;
        }
    }
}