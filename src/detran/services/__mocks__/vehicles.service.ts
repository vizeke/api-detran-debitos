import { Injectable } from '@nestjs/common';

const builder = require('xmlbuilder');
const parser = require('xml2json');

@Injectable()
export class VehiclesService {
  async searchVehicle(plate, owner_document){

    const respostaVeiculoEncontrado =  {
        ObterDadosVeiculoResult: {
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
        },
      };

    const respostaVeiculoRoubado =  {
      ObterDadosVeiculoResult: {
        MensagemErro: 'Consulta não permitida para veículo com registro de furto/roubo ativo',
      },
    };

    const respostaVeiculoNEncontrado =  {
      ObterDadosVeiculoResult: {
        MensagemErro: 'Veículo placa XXX0000 e CPF/CNPJ 00000000000 não encontrado.',
      },
    };

    if (plate === 'VAL1705' && owner_document === '9876543210'){
      return respostaVeiculoEncontrado;
    }else if (plate === 'ROU8470' && owner_document === '12345678910'){
      return respostaVeiculoRoubado;
    }else{
      return respostaVeiculoNEncontrado;
    }
  }

  async getTickets(plate, owner_document): Promise<any> {

    const resposta = {
    };

    return resposta;
  }
}
