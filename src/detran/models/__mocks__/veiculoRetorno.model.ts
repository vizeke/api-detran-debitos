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
        if (params.placa === 'VAL1705' && params.renavam === '98765432101' ) {
            this.plate = 'VAL1705';
            this.renavam = 9876543210;
            this.model = 'VW/PARATI 1.6 TRACKFIELD';
        } else if (params.placa === 'ROU8470' && params.renavam === '12345678910' ) {
            this.mensagemErro = 'Consulta não permitida para veículo com registro de furto/roubo ativo';
        } else {
            this.mensagemErro = 'Veículo não encontrado.';
        }
    }
}