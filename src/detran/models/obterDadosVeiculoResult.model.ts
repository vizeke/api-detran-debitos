import { VeiculoInfo } from './veiculoInfo.model';

export class ObterDadosVeiculoResult {
    veiculoInfo: VeiculoInfo;
    mensagemErro: string;

    constructor(params: any) {
        if (params.MensagemErro){
            this.mensagemErro = params.MensagemErro;
        }else{
            this.veiculoInfo = new VeiculoInfo(params.VeiculoInfo);
        }
    }
}