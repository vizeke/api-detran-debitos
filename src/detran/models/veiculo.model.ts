
export class Veiculo{
    Placa: string;
    CPF: string;
    Renavam: number;

    constructor(veic: any){
        this.Placa = veic.Placa;
        this.CPF = veic.CPF;
        this.Renavam = veic.Renavam;
    }
}