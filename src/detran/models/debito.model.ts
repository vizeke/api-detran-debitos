import { ApiModelProperty } from '@nestjs/swagger';

export class Debito {
    @ApiModelProperty()
    id: number;

    @ApiModelProperty()
    classification: number;

    @ApiModelProperty()
    date: string;

    @ApiModelProperty()
    description: string;

    @ApiModelProperty()
    district: string;

    @ApiModelProperty()
    place: string;

    @ApiModelProperty()
    plate: string;

    @ApiModelProperty()
    points: number;

    @ApiModelProperty()
    warning: boolean;

    @ApiModelProperty()
    amount: number;

    constructor(debito: any){
        this.id = debito.IdDebito;
        this.classification = debito.Classe;
        this.date = debito.DataVencimento;
        this.description = debito.DescricaoServico;
        this.district = null;
        this.place = null;
        this.plate = debito.Placa;
        this.points = null;
        this.warning = false;
        this.amount = debito.ValorAtualizadoFranquia;
    }

}