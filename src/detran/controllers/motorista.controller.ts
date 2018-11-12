import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
import { MotoristaService } from '../services/motorista.service';

@Controller('motorista')
export class MotoristaController {
    resposta: any;
    constructor( private readonly motoristaService: MotoristaService ) { }

    @Get(':cnh/:doc_pessoal/:cedula_cnh')
    async getDadosGeraisCNH( @Res() res, @Param() params) {

        try {
          this.resposta = await this.motoristaService.getDadosGeraisCNH();
          res.status( HttpStatus.OK ).send( this.resposta);
        } catch ( error ) {
          res.status( HttpStatus.BAD_REQUEST )
          .send( ' Error ao fazer a requisição dos dados do veiculo. Error: ', error );
        }
    }
}
