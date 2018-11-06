import { Module, HttpModule } from '@nestjs/common';
import { VeiculosController } from './controllers/veiculos.controller';
import { VeiculosService } from './services/veiculos.service';
import { DetranSoapClient } from './services/detran-soap-client';
import { MotoristaService } from './services/motorista.service';
import { MotoristaController } from './controllers/motorista.controller';

@Module({
  imports: [HttpModule],
  controllers: [VeiculosController, MotoristaController],
  providers: [VeiculosService, DetranSoapClient, MotoristaService],
})
export class DetranModule {}
