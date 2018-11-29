import { loadFeature, defineFeature } from '../node_modules/jest-cucumber';
import request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { DetranModule } from '../src/detran/detran.module';
const feature = loadFeature( './test/features/gerar_GRU.feature' );
jest.mock( '../src/detran/detran.module' );
jest.mock( '../src/detran/services/veiculos.service' );

let resposta: any;
let placa: string;
let cpf: string;
let dataVehicle: any;
let tipoDebito: string;

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
  test( 'Solicitando alguns debitos', ( {
    given,
    when,
    then,
  } ) => {
    given( 'O usuario possui debitos', () => {
      pending();
    } );
    when( 'o usuario escolher os debitos', () => {
      pending();
    } );
    when( 'solicita a geração da GRU', () => {
      pending();
    } );
    then(
      'o sistema retorna a GRU com os debitos',
      () => {
        pending();
      },
    );
  } );

  test( 'Solicitando um débito que possuem outros tipos de débitos obrigatorios', ( { given, when, then } ) => {
    given( 'O usuario possui debitos', () => {
      pending();
    } );
    when( 'o usuario escolhe um debito que tem outros tipos de débitos obrigatorios', () => {
      pending();
    } );
    when( 'solicita a geração da GRU', () => {
      pending();
    } );
    then( 'o sistema retorna uma mensagem informando que é necessário selecionar os outros débitos obrigatórios', () => {
      pending();
    } );
  } );

  test( 'Solicitando todos debitos', ( { given, when, then } ) => {
    given( 'o usuario informa a placa do veiculo', () => {
      placa = 'ABC1234';
    } );
    given('informa o renavam do veiculo', () => {
      cpf = '12345678910';
    });
    when( 'o usuario deseja pagar todos os debitos', async () => {
      resposta = await request( app.getHttpServer() )
        .get( `/veiculos/${placa}/${cpf}/gerar-gru` );
      expect( resposta.status ).toBe( 200 );
    } );
    when( 'solicita a geração da GRU', () => {
      // Já testado acima
    } );
    then( 'o sistema retorna a GRU com os debitos', () => {
      dataVehicle = resposta.body;
      expect( Object.keys( dataVehicle.Guia ) ).toContain( 'ItemGuia' );
    } );
  } );

  test( 'Nenhum debito solicitado', ( { given, when, then } ) => {
    given( 'O usuario possui debitos', () => {
      pending();
    } );
    when( 'o usuario não escolhe nenhum debito', () => {
      pending();
    } );
    when( 'solicita a geração da GRU', () => {
      pending();
    } );
    then( 'o sistema retorna uma mensagem informando que é necessário selecionar pelo menos um debito', () => {
      pending();
    } );
  } );

  test( 'Solicitando um tipo de debito que possui débitos anteriores', ( { given, when, then } ) => {
    given( 'O usuario possui débitos atrasados', () => {
      pending();
    } );
    when( 'o usuario deseja pagar um débito de 2017-1', () => {
      pending();
    } );
    when( 'possui débitos anteriores atrasados', () => {
      pending();
    } );
    then( 'o sistema retorna uma mensagem informando que é necessário selecionar também os débitos anteriores', () => {
      pending();
    } );
  } );
} );