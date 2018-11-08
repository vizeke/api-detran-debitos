import { Module, HttpModule } from '@nestjs/common';
//  import { TypeOrmModule } from '@nestjs/typeorm';
import { VeiculosController } from './controllers/veiculos.controller';
import { VeiculosService } from './services/veiculos.service';
import { DetranSoapClient } from './services/detran-soap-client';
import { MotoristaService } from './services/motorista.service';
import { MotoristaController } from './controllers/motorista.controller';
// import { StiDB } from './common/config/stiDB.config';

// const sitDB = new StiDB();
/*
 TypeOrmModule.forRoot({
      type: sitDB.type,
      host: sitDB.host, // process.env.SIT_SERVER,
      port: sitDB.port,
      username: sitDB.username,
      password: sitDB.password,
      database: sitDB.databese,
      entities: [__dirname + '/++/+.models{.ts,.js}'],
      synchronize: sitDB.sync,
    }),
 */

@Module({
  imports: [ HttpModule ],
  controllers: [VeiculosController, MotoristaController],
  providers: [VeiculosService, DetranSoapClient, MotoristaService],
})
export class DetranModule {}
