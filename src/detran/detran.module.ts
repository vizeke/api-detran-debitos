import { Module, HttpModule } from '@nestjs/common';
import { VeiculosController } from './controllers/veiculos.controller';
import { VeiculosService } from './services/veiculos.service';
import { DetranSoapClient } from './services/detran-soap-client';

@Module({
  imports: [HttpModule],
  controllers: [VeiculosController],
  providers: [VeiculosService, DetranSoapClient],
})
export class DetranModule {}
