import { Veiculo } from './veiculo.model';
import { ApiModelProperty } from '@nestjs/swagger';

export class VeiculoConsulta {
  @ApiModelProperty()
  veiculoConsulta: Veiculo;

  constructor(params) {
    this.veiculoConsulta = new Veiculo(params);
  }
}
