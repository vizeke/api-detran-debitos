import { ApiModelProperty } from '@nestjs/swagger';

export class Debito {

    @ApiModelProperty()
    classe: number;

    @ApiModelProperty()
    codigoServico: number;

    @ApiModelProperty()
    descricaoServico: string;

    @ApiModelProperty()
    dataVencimento: string;

    @ApiModelProperty()
    exercicio: number;

    @ApiModelProperty()
    idDebito: number;

    @ApiModelProperty()
    parcela: number;

    @ApiModelProperty()
    placa: string;

    @ApiModelProperty()
    valorAtualizadoFranquia: number;

    @ApiModelProperty()
    dpvatAnterior: number;

    @ApiModelProperty()
    dpvatCotas: string;

    @ApiModelProperty()
    dpvatExercicio: number;

    @ApiModelProperty()
    ipvaAnterior: number;

    @ApiModelProperty()
    ipvaExercicio: number;

    @ApiModelProperty()
    ipvaParcelamento: number;

    @ApiModelProperty()
    licenciamentoAnterior: number;

    @ApiModelProperty()
    licenciamentoExercicio: number;

    @ApiModelProperty()
    multas: number;

    @ApiModelProperty()
    taxaEspecial: number;

    @ApiModelProperty()
    taxaPatio: number;

    @ApiModelProperty()
    taxaServico: number;

    @ApiModelProperty()
    ipvaCotas: string;

    constructor(debito: any){

        this.descricaoServico = 'Licenciamento Anual 2018',
        this.valorAtualizadoFranquia = 157.0800,
        this.dataVencimento = '2018-04-13T03:00:00.000Z',
        this.dpvatCotas = '',
        this.idDebito = 84677125,
        this.placa = 'CAR1234',
        this.ipvaExercicio = -1,
        this.ipvaAnterior = -1,
        this.licenciamentoExercicio = 1,
        this.licenciamentoAnterior = -1,
        this.taxaServico = -1,
        this.multas = -1,
        this.ipvaParcelamento = -1,
        this.taxaEspecial = -1,
        this.taxaPatio = -1,
        this.dpvatExercicio = -1,
        this.dpvatAnterior = -1,
        this.codigoServico = 1,
        this.classe = 1,
        this.exercicio = 2018,
        this.parcela = 0,
        this.ipvaCotas = '';
    }

}