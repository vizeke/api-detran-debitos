
export class Debito {

    classe: number;
    codigoServico: number;
    descricaoServico: string;
    dataVencimento: string;
    exercicio: number;
    idDebito: number;
    parcela: number;
    placa: string;
    valorAtualizadoFranquia: number;
    dpvatAnterior: number;
    dpvatCotas: string;
    dpvatExercicio: number;
    ipvaAnterior: number;
    ipvaExercicio: number;
    ipvaParcelamento: number;
    licenciamentoAnterior: number;
    licenciamentoExercicio: number;
    multas: number;
    taxaEspecial: number;
    taxaPatio: number;
    taxaServico: number;
    ipvaCotas: string;

    constructor(debito: any){
        this.classe = debito.Classe;
        this.codigoServico = debito.CodigoServico;
        this.descricaoServico = debito.descricaoServico;
        this.dataVencimento = debito.dataVencimento;
        this.exercicio = debito.Exercicio;
        this.idDebito = debito.IdDebito;
        this.parcela = debito.Parcela;
        this.placa = debito.placa;
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