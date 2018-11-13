import { Veiculo } from './veiculo.model';

export class VeiculoConsulta {
    veiculoConsulta: Veiculo;
    constructor(params) {
        this.veiculoConsulta = new Veiculo(params);
    }
}