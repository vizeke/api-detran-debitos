import { loadFeature, defineFeature } from '../node_modules/jest-cucumber';
import request from "supertest";
import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import { AppModule } from '../src/app.module';
const feature = loadFeature('./test/features/acessar_dados_veiculo.feature');

jest.mock( '../src/app.module' );
jest.mock( '../src/detran/services/vehicles.service' );

let resposta: any;
let plate: string;
let cpf: string;
let dataVehicle: any;

defineFeature(feature, test => {
  let module: TestingModule;
  let app: INestApplication;

  beforeAll( async () => {
    module = await Test.createTestingModule( {
      imports: [ AppModule ]
    } ).compile();
    app = module.createNestApplication();
    await app.init();
  } );

  test('Exibindo os dados do veículo', ({
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
      .get( '/vehicles/${plate}/${cpf}' );
      expect( resposta.status ).toBe( 200 );
    });
    then(
      'o sistema retorna os dados do veiculo',
      async () => {
        dataVehicle = resposta.body;
        expect( dataVehicle.length ).toBeGreaterThan( 0 );
      },
    );
  });

  test('Exibindo os dados de veículo inexistente', ({ given, when, then }) => {
    given('O usuario informa a placa do veiculo', async () => {
      plate = 'a';
    });
    given('informa o renavam', async () => {
      cpf = '0';
    });
    when('o usuario solicitar os dados do veiculo', async () => {
      resposta = await request( app.getHttpServer() )
      .get( '/vehicles/${plate}/${cpf}' );
      expect( resposta.status ).toBe( 404 );
    });
    then('o sistema retorna uma mensagem informando que o veículo não existe', async () => {

      expect();
    });
  });

  test('Exibindo as infrações do veículo', ({ given, when, then }) => {
    given('O usuario informa a placa do veiculo', () => {
      pending();
    });
    given('informa o renavam', () => {
      pending();
    });
    when('o usuario solicitar as infrações associadas ao veiculo', () => {
      pending();
    });
    then('o sistema retorna as infrações associdas ao veiculo', () => {
      pending();
    });
  });

  test('Veiculo nao possui infrações', ({ given, when, then }) => {
    given('O usuario informa a placa do veiculo', () => {
      pending();
    });
    given('informa o renavam', () => {
      pending();
    });
    when('o usuario seleciona exibir as associadas ao veiculo', () => {
      pending();
    });
    then('o sistema retorna uma mensagem informando que o veiculo não possui infrações', () => {
      pending();
    });
  });
});