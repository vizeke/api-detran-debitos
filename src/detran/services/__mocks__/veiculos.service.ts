import { Injectable } from '@nestjs/common';
import { VeiculoInfo } from '../../models/veiculoInfo.dto';
import { SegurancaDetran } from '../../models/segurançaDetran.dto';

// const builder = require('xmlbuilder');
// const parser = require('xml2json');

@Injectable()
export class VeiculosService {
  async getDataVeiculosWS( placa, doc_proprietario ): Promise<any> {

    const respostaVeiculoEncontrado = {
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
    };

    const teste = new VeiculoInfo(respostaVeiculoEncontrado.VeiculoInfo);
    // const sd = new SegurancaDetran();

    // console.log ('TESTE: ', teste);
    // console.log('SEGURANCA: ', sd);
    // console.log('USER: ', process.env.DETRAN_USER, '\n SENHA: ', process.env.DETRAN_PASS);
    const respostaVeiculoRoubado = {
        MensagemErro: 'Consulta não permitida para veículo com registro de furto/roubo ativo',
    };

    const respostaVeiculoNEncontrado = {
        MensagemErro: 'Veículo não encontrado.',
    };

    if ( placa === 'VAL1705' && doc_proprietario === '9876543210' ) {
      return respostaVeiculoEncontrado;
    } else if ( placa === 'ROU8470' && doc_proprietario === '12345678910' ) {
      return respostaVeiculoRoubado;
    } else {
      return respostaVeiculoNEncontrado;
    }
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
      return respostaNenhumDebito;
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

    return respostaPossuiDebitos;
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

    return respostaTypeDebits;
  }
}
