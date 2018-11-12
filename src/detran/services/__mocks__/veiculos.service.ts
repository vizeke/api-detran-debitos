import { Injectable } from '@nestjs/common';
// import { VeiculoInfo } from '../../models/veiculoInfo.model';
import { Retorno } from '../../models/retorno';

// const builder = require('xmlbuilder');
// const parser = require('xml2json');

@Injectable()
export class VeiculosService {
  resposta: Retorno;

  async getDadosVeiculos( placa, doc_proprietario ): Promise<any> {

    if ( placa === 'VAL1705' && doc_proprietario === '9876543210' ) {
      this.resposta = new Retorno({
        VeiculoInfo: {
          Veiculo: {
            Placa: 'VAL1705',
            CPF: 9876543210,
            Renavam: 10987654321,
          },
          Nome: 'JOSE SILVA',
          MarcaModelo: 'VW/PARATI 1.6 TRACKFIELD',
          AnoFabricacao: 2006,
        },
      });

    } else if ( placa === 'ROU8470' && doc_proprietario === '12345678910' ) {
      this.resposta = new Retorno({
        MensagemErro: 'Consulta não permitida para veículo com registro de furto/roubo ativo',
      });
    } else {
      this.resposta = new Retorno({
        MensagemErro: 'Veículo não encontrado.',
      });
    }

    return this.resposta;
  }

  async getDebits( placa, doc_proprietario ): Promise<any> {

    /*
      Placa VAL1705
      Documento 9876543210
    */
    const respostaListaDebitos = {
        Debito: {
          Debito: [
            {
              DescricaoServico: 'Postagem do CRLV 2018',
              ValorAtualizadoFranquia: '19.6400',
              DataVencimento: '2018-08-20T03:00:00.000Z',
              DpvatCotas: '',
              IdDebito: 84677074,
              Placa: 'VAL1705',
              IpvaExercicio: -1,
              IpvaAnterior: -1,
              LicenciamentoExercicio: 2,
              LicenciamentoAnterior: -1,
              TaxaServico: -1,
              Multas: -1,
              IpvaParcelamento: -1,
              TaxaEspecial: -1,
              TaxaPatio: -1,
              DpvatExercicio: -1,
              DpvatAnterior: -1,
              CodigoServico: 27,
              Classe: 1,
              Exercicio: 2018,
              Parcela: 0,
              IpvaCotas: '',
            },
            {
              DescricaoServico: 'Licenciamento Anual 2018',
              ValorAtualizadoFranquia: '157.0800',
              DataVencimento: '2018-08-20T03:00:00.000Z',
              DpvatCotas: '',
              IdDebito: 84677073,
              Placa: 'VAL1705',
              IpvaExercicio: -1,
              IpvaAnterior: -1,
              LicenciamentoExercicio: 1,
              LicenciamentoAnterior: -1,
              TaxaServico: 1,
              Multas: -1,
              IpvaParcelamento: -1,
              TaxaEspecial: -1,
              TaxaPatio: -1,
              DpvatExercicio: -1,
              DpvatAnterior: -1,
              CodigoServico: 1,
              Classe: 1,
              Exercicio: 2018,
              Parcela: 0,
              IpvaCotas: '',
            },
            {
              DescricaoServico: 'IPVA 4ª Cota 2018',
              ValorAtualizadoFranquia: '112.0500',
              DataVencimento: '2018-08-20T03:00:00.000Z',
              DpvatCotas: '',
              IdDebito: 84677072,
              Placa: 'VAL1705',
              IpvaExercicio: 0,
              IpvaAnterior: -1,
              LicenciamentoExercicio: 1,
              LicenciamentoAnterior: -1,
              TaxaServico: 1,
              Multas: -1,
              IpvaParcelamento: -1,
              TaxaEspecial: -1,
              TaxaPatio: -1,
              DpvatExercicio: -1,
              DpvatAnterior: -1,
              CodigoServico: 129,
              Classe: 3,
              Exercicio: 2018,
              Parcela: 4,
              IpvaCotas: '20184',
            },
          ],
        },
    };

    /*
      Placa XXX0000
      Documento 12345678910
     */
    const respostaNenhumDebito = {
         Debito: null,
    };

    if (placa === 'VAL1705' && doc_proprietario === '9876543210'){
      return respostaListaDebitos;
    }else{
      return this.resposta = new Retorno(respostaNenhumDebito);
    }
  }

  async getDebitsPreview( placa, doc_proprietario ): Promise<any>{

    const respostaPossuiDebitos = {
      TipoDebito: {
        TemLicenciamentoAtual: 'S',
        TemLicenciamentoAnterio: 'N',
        TemDPVAT: 'S',
        TemIPVA: 'S',
        TemMulta: 'N',
        TemIPVAAnterior: 'S',
        TemDPVATAnterior: 'N',
      },
    };

    return this.resposta = new Retorno(respostaPossuiDebitos);
  }

  async getTypeDebits( placa, doc_proprietario, tipo_debito ): Promise<any> {

    const respostaTypeDebits = {
      Debito: {
        Debito: [
          {
            DescricaoServico: 'IPVA 4ª Cota 2018',
            ValorAtualizadoFranquia: '112.0500',
            DataVencimento: '2018-08-20T03:00:00.000Z',
            DpvatCotas: '',
            IdDebito: 84677072,
            Placa: 'VAL1705',
            IpvaExercicio: 0,
            IpvaAnterior: -1,
            LicenciamentoExercicio: 1,
            LicenciamentoAnterior: -1,
            TaxaServico: 1,
            Multas: -1,
            IpvaParcelamento: -1,
            TaxaEspecial: -1,
            TaxaPatio: -1,
            DpvatExercicio: -1,
            DpvatAnterior: -1,
            CodigoServico: 129,
            Classe: 3,
            Exercicio: 2018,
            Parcela: 4,
            IpvaCotas: '20184',
          },
        ],
      },
    };

    return this.resposta = new Retorno(respostaTypeDebits);
  }

  async gerarGRU( params ): Promise<Retorno>{

    const retornoGRU = {
      Guia: {
        ItemGuia: [
          {
            LinhaDigitavel: '85820000000-7  19640219201-0  81130002018-6  80100847395-0',
            CodigoBarra: '85820000000196402192018113000201880100847395',
            ValorGuia: '19.6400',
            Postagem: true,
            Nome: 'TESTE',
            Placa: 'ROU8470',
            Renavam: 225608235,
            Marca: 'RENAULT/CLIO EXP 10 16VH',
            Nossonumero: '00201880100847395',
            Vencimentoguia: '2018-11-30T02:00:00.000Z',
            Tiporegistro: 1,
            Classe: 1,
            Descricaoservico: 'Postagem do CRLV 2018',
            Datavencimento: '2018-04-13T03:00:00.000Z',
            Valorvencimento: '19.6400',
            Valorcorrigido: '19.6400',
            Valordesconto: '0.0000',
            Valorjuros: '0.0000',
            Valormulta: '0.0000',
            Valoratualizadofranquia: '19.6400',
            Dataautuacao: '',
            Horaautuacao: '00:00',
            Valorauto: '0',
          },
        ],
      },
      GuiaPDF: 'JVBERi0xLjcgCiXi48/TIAoxIDAgb2JqIAo8PCAKL1R5cGUgL0Nh',
    };

    return new Retorno(retornoGRU);
  }
}
