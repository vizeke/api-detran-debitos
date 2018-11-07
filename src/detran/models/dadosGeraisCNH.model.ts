import { Entity, Column } from 'typeorm';

// @Entity()
export class DadosGeraisCNH {

    @Column()
    status: string;

    @Column()
    motivoBloqueio: string;

    @Column()
    dataVencimento: string;

    @Column()
    existemInfracoes: string;

    @Column()
    existeProcessoHabilitacaoAberto: string;

    @Column()
    existeProcessoAdmAberto: string;

}