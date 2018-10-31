import { loadFeature, defineFeature } from '../node_modules/jest-cucumber';
import request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { DetranModule } from '../src/detran/detran.module';
const feature = loadFeature( './test/features/acessar_dados_veiculo.feature' );
jest.mock( '../src/detran/detran.module' );
jest.mock( '../src/detran/services/vehicles.service' );

let resposta: any;
let plate: string;
let cpf: string;
let dataVehicle: any;

defineFeature( feature, test => {
  let module: TestingModule;
  let app: INestApplication;

  beforeAll( async () => {
    module = await Test.createTestingModule( {
      imports: [ DetranModule ],
    } ).compile();
    app = module.createNestApplication();
    await app.init();
  } );

  /**
   * TODO
   * Tratar a partir de excessões
   * Criar outro teste para acesso aos dados pelo banco de dados
   */

  test( 'Exibindo os dados do veículo', ( {
    given,
    when,
    then,
  }) => {
    given('O usuario informa a placa do veiculo', async () => {
      plate = 'ROU8470';
    });
    given('informa o CPF', async () => {
      cpf = '12345678910';
    });
    when('o usuario solicitar os dados do veiculo', async () => {
      resposta = await request( app.getHttpServer() )
        .get( `/vehicles/dataWS/${plate}/${cpf}` );
      expect( resposta.status ).toBe( 200 );
    } );
    then(
      'o sistema retorna os dados do veiculo',
      async () => {
        dataVehicle = resposta.body;
        expect( Object.keys( dataVehicle ) ).toContain( 'VeiculoInfo' );
      },
    );
  } );

  test( 'Exibindo os dados de veículo inexistente', ( { given, when, then } ) => {
    given( 'O usuario informa a placa do veiculo', async () => {
      plate = 'XXX0000';
    } );
    given( 'informa o CPF', async () => {
      cpf = '00000000000';
    } );
    when( 'o usuario solicitar os dados do veiculo', async () => {
      resposta = await request( app.getHttpServer() )
        .get( `/vehicles/dataWS/${plate}/${cpf}` );
      expect( resposta.status ).toBe( 403 );
    } );
    then( 'o sistema retorna uma mensagem informando que o veículo não existe', async () => {
      dataVehicle = resposta.body;
      expect( dataVehicle.MensagemErro )
        .toEqual( 'Veículo não encontrado.' );
    } );
  } );

  test( 'Exibindo os dados de veículo com registro de furto/roubo ativo', ( { given, when, then } ) => {
    given( 'O usuario informa a placa do veiculo', () => {
      plate = 'ROU8470';
    } );
    given( 'informa o CPF', () => {
      cpf = '12345678910';
    } );
    when( 'o usuario solicitar os dados do veiculo', async () => {
      resposta = await request( app.getHttpServer() )
        .get( `/vehicles/dataWS/${plate}/${cpf}` );
      expect( resposta.status ).toBe( 403 );
    } );
    then( 'o sistema retorna uma mensagem informando que a consulta não é permitida para esse tipo de resgitro ativo', () => {
      dataVehicle = resposta.body;
      expect( dataVehicle.MensagemErro )
        .toEqual( 'Consulta não permitida para veículo com registro de furto/roubo ativo' );
    } );
  } );

  test( 'Exibindo as infrações do veículo', ( { given, when, then } ) => {
    given( 'O usuario informa a placa do veiculo', () => {
      pending();
    } );
    given( 'informa o CPF', () => {
      pending();
    } );
    when( 'o usuario solicitar as infrações associadas ao veiculo', () => {
      pending();
    } );
    then( 'o sistema retorna as infrações associdas ao veiculo', () => {
      pending();
    } );
  } );

  test( 'Veiculo nao possui infrações', ( { given, when, then } ) => {
    given( 'O usuario informa a placa do veiculo', () => {
      pending();
    } );
    given( 'informa o CPF', () => {
      pending();
    } );
    when( 'o usuario seleciona exibir as associadas ao veiculo', () => {
      pending();
    } );
    then( 'o sistema retorna uma mensagem informando que o veiculo não possui infrações', () => {
      pending();
    } );
  } );

  afterAll( async () => {
    await app.close();
  } );
} );