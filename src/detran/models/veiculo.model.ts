
export class Veiculo{
    Placa: string;
    CPF: string;
    Renavam: number;

    constructor( veic: any ){
        this.Placa = veic.Placa || veic.placa;
        this.CPF = veic.CPF || veic.doc_proprietario;
        this.Renavam = veic.Renavam || veic.renavam;
    }
}