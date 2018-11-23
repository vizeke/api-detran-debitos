import { ApiModelProperty } from '@nestjs/swagger';

export class VeiculoRetorno {
    @ApiModelProperty()
    placa: string;

    @ApiModelProperty()
    modelo: string;

    @ApiModelProperty()
    renavam: number;

    constructor(params: any) {
        this.placa = params.VeiculoInfo.Veiculo.Placa;
        this.modelo = params.VeiculoInfo.MarcaModelo;
        this.renavam = params.VeiculoInfo.Veiculo.Renavam;
    }
}