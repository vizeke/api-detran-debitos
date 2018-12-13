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

        this.descricaoServico = debito.DescricaoServico;
        this.valorAtualizadoFranquia = debito.ValorAtualizadoFranquia;
        this.dataVencimento = debito.DataVencimento;
        this.dpvatCotas = debito.DpvatCotas;
        this.idDebito = debito.IdDebito;
        this.placa = debito.Placa;
        this.ipvaExercicio = debito.IpvaExercicio;
        this.ipvaAnterior = debito.IpvaAnterior;
        this.licenciamentoExercicio = debito.LicenciamentoExercicio;
        this.licenciamentoAnterior = debito.LicenciamentoAnterior;
        this.taxaServico = debito.TaxaServico;
        this.multas = debito.Multas;
        this.ipvaParcelamento = debito.IpvaParcelamento;
        this.taxaEspecial = debito.TaxaEspecial;
        this.taxaPatio = debito.TaxaPatio;
        this.dpvatExercicio = debito.DpvatExercicio;
        this.dpvatAnterior = debito.DpvatAnterior;
        this.codigoServico = debito.CodigoServico;
        this.classe = debito.Classe;
        this.exercicio = debito.Exercicio;
        this.parcela = debito.Parcela;
        this.ipvaCotas = debito.IpvaCotas;
    }

}