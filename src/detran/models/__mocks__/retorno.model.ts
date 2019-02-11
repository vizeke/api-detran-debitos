import { HttpStatus } from '@nestjs/common';
import { ApiModelProperty } from '@nestjs/swagger';

export class Retorno {
  @ApiModelProperty()
  public res: any;

  @ApiModelProperty()
  public status: number;

  constructor(resposta: any) {
    this.res = resposta;

    if (
      Object.keys(this.res)[0] === 'mensagemErro' ||
      Object.keys(this.res)[0] === 'MensagemErro'
    ) {
      this.status = HttpStatus.FORBIDDEN;
    } else {
      this.status = HttpStatus.OK;
    }
  }
}
