import { ApiModelProperty } from '@nestjs/swagger';

export class TipoDebito {

    @ApiModelProperty()
    temLicenciamentoAnual: string;

    @ApiModelProperty()
    temLicenciamentoAnterior: string;

    @ApiModelProperty()
    temDPVAT: string;

    @ApiModelProperty()
    temIPVA: string;

    @ApiModelProperty()
    temMulta: string;

    @ApiModelProperty()
    temIPVAAnterior: string;

    @ApiModelProperty()
    temDPVATAnterior: string;

    @ApiModelProperty()
    mensagemErro: string;

    constructor(tipoDeb: any){

        if (Object.keys(tipoDeb)[0] === 'MensagemErro') {
            this.mensagemErro = tipoDeb.MensagemErro;
        } else if (tipoDeb === null || tipoDeb === undefined) {
            this.mensagemErro = 'Erro ao gerar tipoDebito';
        } else {
            this.temLicenciamentoAnual = tipoDeb.TemLicenciamentoAnual;
            this.temLicenciamentoAnterior = tipoDeb.TemLicenciamentoAnterio;
            this.temDPVAT = tipoDeb.TemDPVAT;
            this.temIPVA = tipoDeb.TemIPVA;
            this.temMulta = tipoDeb.TemMulta;
            this.temIPVAAnterior = tipoDeb.TemIPVAAnterior;
            this.temDPVATAnterior = tipoDeb.TemDPVATAnterior;
        }
    }
}