import { ApiModelProperty } from '@nestjs/swagger';

export class Veiculo{
    @ApiModelProperty()
    Placa: string;

    @ApiModelProperty()
    CPF: string;

    @ApiModelProperty()
    Renavam: number;

    constructor( veic: any ){
        this.Placa = 'CAR1234';
        this.CPF = '12345678910';
        this.Renavam = 12345678910;
    }
}