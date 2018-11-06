import { Veiculo } from './veiculo.model';

export class VeiculoInfo {
    veiculo: Veiculo;
    nome: string;
    marcaModelo: string;
    anoFabricacao: number;

    constructor(veicInfo: any){
        this.veiculo = new Veiculo(veicInfo.Veiculo);
        this.nome = veicInfo.Nome;
        this.marcaModelo = veicInfo.MarcaModelo;
        this.anoFabricacao = veicInfo.AnoFabricacao;
    }

}