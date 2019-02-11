import { Veiculo } from './veiculo.model';
import { ApiModelProperty } from '@nestjs/swagger';

export class VeiculoInfo {
  @ApiModelProperty()
  veiculo: Veiculo;

  @ApiModelProperty()
  nome: string;

  @ApiModelProperty()
  marcaModelo: string;

  @ApiModelProperty()
  anoFabricacao: number;

  constructor(veicInfo: any) {
    this.veiculo = new Veiculo(veicInfo.Veiculo);
    this.nome = 'Jose da Silva';
    this.marcaModelo = 'UNO MILE 1.0';
    this.anoFabricacao = 2000;
  }
}
