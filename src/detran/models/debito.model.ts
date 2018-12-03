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
        this.classe = debito.Classe;
        this.codigoServico = debito.CodigoServico;
        this.descricaoServico = debito.DescricaoServico;
        this.dataVencimento = debito.DataVencimento;
        this.exercicio = debito.Exercicio;
        this.idDebito = debito.IdDebito;
        this.parcela = debito.Parcela;
        this.placa = debito.Placa;
        this.valorAtualizadoFranquia = debito.ValorAtualizadoFranquia;
        this.dpvatAnterior = debito.DpvatAnterior;
        this.dpvatCotas = debito.DpvatCotas;
        this.dpvatExercicio = debito.DpvatExercicio;
        this.ipvaAnterior = debito.IpvaAnterior;
        this.ipvaExercicio = debito.IpvaExercicio;
        this.ipvaParcelamento = debito.IpvaParcelamento;
        this.licenciamentoAnterior = debito.LicenciamentoAnterior;
        this.licenciamentoExercicio = debito.LicenciamentoExercicio;
        this.multas = debito.Multas;
        this.taxaEspecial = debito.TaxaEspecial;
        this.taxaPatio = debito.TaxaPatio;
        this.taxaServico = debito.TaxaServico;
        this.ipvaCotas = debito.IpvaCotas;
    }

}