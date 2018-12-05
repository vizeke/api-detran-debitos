import { HttpStatus } from '@nestjs/common';
import { ApiModelProperty } from '@nestjs/swagger';

const MSG_FURTO = 'Consulta não permitida para veículo com registro de furto/roubo ativo';
const MSG_RENAVAN = 'Renavam';

export class Retorno {

    @ApiModelProperty()
    public res: any;

    @ApiModelProperty()
    public status: number;

    @ApiModelProperty()
    public erro: errorEnum;

    constructor(resposta: any){
        this.res = resposta;

        if (Object.keys(this.res)[0] === 'mensagemErro' || Object.keys(this.res)[0] === 'MensagemErro'){
            this.status = HttpStatus.FORBIDDEN;
        }else {
            this.status = HttpStatus.OK;
        }
    }
}