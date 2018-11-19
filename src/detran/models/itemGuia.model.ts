
export class ItemGuia {
    LinhaDigitavel: string;
    CodigoBarra: string;
    ValorGuia: number;
    Postagem: boolean;
    Nome: string;
    Placa: string;
    Renavam: number;
    Marca: string;
    Nossonumero: string;
    Vencimentoguia: string;
    Tiporegistro: number;
    Classe: number;
    Descricaoservico: string;
    Datavencimento: string;
    Valorvencimento: number;
    Valorcorrigido: number;
    Valordesconto: number;
    Valorjuros: number;
    Valormulta: number;
    Valoratualizadofranquia: number;
    Dataautuacao: string;
    Horaautuacao: string;
    Valorauto: number;

    constructor(i_guia: any) {
        this.LinhaDigitavel = i_guia.LinhaDigitavel;
        this.CodigoBarra = i_guia.CodigoBarra;
        this.ValorGuia = i_guia.ValorGuia;
        this.Postagem = i_guia.Postagem;
        this.Nome = i_guia.Nome;
        this.Placa = i_guia.Placa;
        this.Renavam = i_guia.Renavam;
        this.Marca = i_guia.Marca;
        this.Nossonumero = i_guia.Nossonumero;
        this.Vencimentoguia = i_guia.Vencimentoguia;
        this.Tiporegistro = i_guia.Tiporegistro;
        this.Classe = i_guia.Classe;
        this.Descricaoservico = i_guia.Descricaoservico;
        this.Datavencimento = i_guia.Datavencimento;
        this.Valorvencimento = i_guia.Valorvencimento;
        this.Valorcorrigido = i_guia.Valorcorrigido;
        this.Valordesconto = i_guia.Valordesconto;
        this.Valorjuros = i_guia.Valorjuros;
        this.Valormulta = i_guia.Valormulta;
        this.Valoratualizadofranquia = i_guia.Valoratualizadofranquia;
        this.Dataautuacao = i_guia.Dataautuacao;
        this.Horaautuacao = i_guia.Horaautuacao;
        this.Valorauto = i_guia.Valorauto;
    }
}