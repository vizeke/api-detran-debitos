import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { MotoristaService } from 'detran/services/motorista.service';

@Controller('motorista')
export class MotoristaController {
    resposta: any;
    constructor( private readonly motoristaService: MotoristaService ) { }

    @Get('')
    async getDadosGeraisCNH( @Res() res) {

        try {
          this.resposta = await this.motoristaService.getDadosGeraisCNH();
          res.status( HttpStatus.OK ).send( this.resposta);
        } catch ( err ) {
          res.status( HttpStatus.BAD_REQUEST )
          .send( ' Error ao fazer a requisição dos dados do veiculo. Error: ', err );
        }
    }


}
