import { HttpStatus } from '@nestjs/common';

const MSG_FURTO = 'Consulta não permitida para veículo com registro de furto/roubo ativo';
const MSG_RENAVAN = 'Renavam';

export class MensagemErro {
    public res: any;
    public status: number;
    public erro: errorEnum;

    constructor(resposta: any){
        this.res = resposta;
        this.status = HttpStatus.FORBIDDEN;
    }

    defineHttpStatusCode(){

        switch (this.res.MensagemErro) {
            case (MSG_FURTO):
                this.erro = errorEnum.VEICULO_ROUBADO;
                break;
            case (MSG_RENAVAN):
                this.erro = errorEnum.RENAVAN_NAO_ENCONTRADO;
                break;
            default:
                this.erro = errorEnum.CPF_NAO_ENCONTRADO;
                break;
        }
        return this.status;
    }
}