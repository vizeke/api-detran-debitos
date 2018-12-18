import { ApiModelProperty } from '@nestjs/swagger';

export class Debito {

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
    flagsTaxaServico: number;

    @ApiModelProperty()
    ipvaCotas: string;

    constructor(debito: any){
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
        this.flagsTaxaServico = debito.TaxaServico;
        this.flagMultas = debito.Multas;
        this.flagIpvaParcelamento = debito.IpvaParcelamento;
        this.flagTaxaEspecial = debito.TaxaEspecial;
        this.flagTaxaPatio = debito.TaxaPatio;
        this.flagDpvatExercicio = debito.DpvatExercicio;
        this.flagDpvatAnterior = debito.DpvatAnterior;
        this.codigoServico = debito.CodigoServico;
        this.exercicio = debito.Exercicio;
        this.parcela = debito.Parcela;
        this.ipvaCotas = debito.IpvaCotas;

        this.defineClasse(debito.Classe);
    }

    defineClasse(classe: number){

        switch (classe) {
            case 1:
                this.classe = 'Licenciamento';
                break;
            case 2:
                this.classe = 'Registro Veículo';
                break;
            case 3:
                this.classe = 'IPVA';
                break;
            case 4:
                this.classe = 'Seguro DPVAT';
                break;
            case 5:
                this.classe = 'Multas';
                break;
            case 6:
                this.classe = 'Vistoria';
                break;
            case 7:
                this.classe = 'Certidões';
                break;
            case 8:
                this.classe = 'Apreensão';
                break;
            case 9:
                this.classe = 'Credenciamento';
                break;
            case 10:
                this.classe = 'Diversos Veículos';
                break;
            case 11:
                this.classe = 'Parcelamento IPVA';
                break;
            case 12:
                this.classe = 'Placas';
                break;
            case 13:
                this.classe = 'Pátio';
                break;
            case 14:
                this.classe = 'Registro de Contrato';
                break;
            default:
                break;
        }
    }

}