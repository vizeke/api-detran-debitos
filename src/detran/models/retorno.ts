import { HttpStatus } from '@nestjs/common';

const MSG_FURTO = 'Consulta não permitida para veículo com registro de furto/roubo ativo';
const MSG_RENAVAN = 'Renavam';

export class Retorno {
    public res: any;
    public status: number;
    public erro: errorEnum;

    constructor(resposta: any){
        this.res = resposta;
        if (Object.keys(this.res)[0] === 'MensagemErro'){
            this.status = HttpStatus.FORBIDDEN;
        }else {
            this.status = HttpStatus.OK;
        }
    }

    /**
     * TO DO
     * retornar erro
     */
    defineErroCode(){

        switch (this.res.retorno) {
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