
export class TipoDebito {
    temLicenciamentoAnual: string;
    temLicenciamentoAnterior: string;
    temDPVAT: string;
    temIPVA: string;
    temMulta: string;
    temIPVAAnterior: string;
    temDPVATAnterior: string;

    constructor(tipoDeb: any){
        this.temLicenciamentoAnual = tipoDeb.TemLicenciamentoAnual;
        this.temLicenciamentoAnterior = tipoDeb.TemLicenciamentoAnterio;
        this.temDPVAT = tipoDeb.TemDPVAT;
        this.temIPVA = tipoDeb.TemIPVA;
        this.temMulta = tipoDeb.TemMulta;
        this.temIPVAAnterior = tipoDeb.TemIPVAAnterior;
        this.temDPVATAnterior = tipoDeb.TemDPVATAnterior;
    }
}