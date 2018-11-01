import { Module } from '@nestjs/common';
import { VeiculosController } from '../controllers/veiculos.controller';
import { VeiculosService } from '../services/veiculos.service';

@Module( {
  controllers: [ VeiculosController ],
  providers: [ VeiculosService ],
} )
export class DetranModule { }
