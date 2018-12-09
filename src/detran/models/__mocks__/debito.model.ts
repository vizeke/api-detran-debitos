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
        if (debito.tipo_debito === 'IPVA'){
            this.id = 84677072;
            this.classification = 3;
            this.date = '2018-08-20T03:00:00.000Z';
            this.description = 'IPVA 4ª Cota 2018';
            this.district = null;
            this.place = null;
            this.plate = 'VAL1705';
            this.points = null;
            this.warning = false;
            this.amount = 112.96;
        }else{
            this.id = 84677073;
            this.classification = 1;
            this.date = '2018-08-20T03:00:00.000Z';
            this.description = 'Licenciamento Anual 2018';
            this.district = null;
            this.place = null;
            this.plate = 'VAL1705';
            this.points = null;
            this.warning = false;
            this.amount = 157.08;
        }
    }

}