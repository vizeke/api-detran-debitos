import { ApiModelProperty } from '@nestjs/swagger';
import { ClassDeb } from './enum';
import { DefineClasseDebitos } from '../common/config/defineClasseDebitos.config';

export class Debito extends DefineClasseDebitos{
  @ApiModelProperty()
  classe: string;

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
  flagDpvatAnterior: number;

  @ApiModelProperty()
  dpvatCotas: string;

  @ApiModelProperty()
  flagDpvatExercicio: number;

  @ApiModelProperty()
  flagIpvaAnterior: number;

  @ApiModelProperty()
  flagIpvaExercicio: number;

  @ApiModelProperty()
  flagIpvaParcelamento: number;

  @ApiModelProperty()
  flagLicenciamentoAnterior: number;

  @ApiModelProperty()
  flagLicenciamentoExercicio: number;

  @ApiModelProperty()
  flagMultas: number;

  @ApiModelProperty()
  flagTaxaEspecial: number;

  @ApiModelProperty()
  flagTaxaPatio: number;

  @ApiModelProperty()
  flagTaxaServico: number;

  @ApiModelProperty()
  ipvaCotas: string;

  constructor(debito: any) {
    super();
    this.descricaoServico = debito.DescricaoServico;
    this.valorAtualizadoFranquia = debito.ValorAtualizadoFranquia;
    this.dataVencimento = debito.DataVencimento;
    this.dpvatCotas = debito.DpvatCotas;
    this.idDebito = debito.IdDebito;
    this.placa = debito.Placa;
    this.flagIpvaExercicio = debito.IpvaExercicio;
    this.flagIpvaAnterior = debito.IpvaAnterior;
    this.flagLicenciamentoExercicio = debito.LicenciamentoExercicio;
    this.flagLicenciamentoAnterior = debito.LicenciamentoAnterior;
    this.flagTaxaServico = debito.TaxaServico;
    this.flagMultas = debito.Multas;
    this.flagIpvaParcelamento = debito.IpvaParcelamento;
    this.flagTaxaEspecial = debito.TaxaEspecial;
    this.flagTaxaPatio = debito.TaxaPatio;
    this.flagDpvatExercicio = debito.DpvatExercicio;
    this.flagDpvatAnterior = debito.DpvatAnterior;
    this.codigoServico = debito.CodigoServico;
    this.classe = super.defineClasse(debito.Classe);
    this.exercicio = debito.Exercicio;
    this.parcela = debito.Parcela;
  }
}
