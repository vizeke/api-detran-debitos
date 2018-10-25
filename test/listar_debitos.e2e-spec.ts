import { loadFeature, defineFeature } from '../node_modules/jest-cucumber';
import request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { DetranModule } from '../src/detran/detran.module';
const feature = loadFeature( './test/features/listar_debitos.feature' );
jest.mock( '../src/detran/detran.module' );
jest.mock( '../src/detran/services/vehicles.service' );

let resposta: any;
let plate: string;
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

  test( 'Listando uma prévia dos tipos de debitos do usuario', ( {
    given,
    when,
    then,
  } ) => {
    given( 'o usuario informa a placa do veiculo', () => {
      plate = 'VAL1705';
    } );
    given( 'informa o CPF ou CNPJ do proprietario', () => {
      cpf = '9876543210';
    } );
    when( 'o usuario solicitar uma previa da lista de debitos', () => {
      pending();
    } );
    then(
      'o sistema retorna uma lista com a previa de todos os tipos de debitos',
      () => {
        pending();
      },
    );
  } );

  test( 'Listando todos os debitos do usuario', ( { given, when, then } ) => {
    given( 'o usuario informa a placa do veiculo', async () => {
      plate = 'VAL1705';
    } );
    given( 'informa o CPF ou CNPJ do proprietario', async () => {
      cpf = '9876543210';
    } );
    when( 'o usuario solicitar uma lista com todos debitos', async () => {
      resposta = await request( app.getHttpServer() )
        .get( `/veiculos/${plate}/${cpf}/debitos` );
      expect( resposta.status ).toBe( 200 );
    } );
    then( 'o sistema retorna uma lista com todos os debitos', async () => {
      dataVehicle = resposta.body;
      expect( Object.keys( dataVehicle.ObterDebitosResult.Debito ) ).toContain( 'Debito' );
    } );
  } );

  test( 'Listando todos os debitos por tipo de debito', ( {
    given,
    when,
    then,
  } ) => {
    given( 'o usuario informa a placa do veiculo', async () => {
      plate = 'VAL1705';
    } );
    given( 'informa o CPF ou CNPJ do proprietario', async () => {
      cpf = '9876543210';
    } );
    given( 'o tipo de debito', async () => {
      tipoDebito = 'IPVA';
    } );
    when( 'o usuario solicitar uma lista de debitos do tipo selecionado', async () => {
      resposta = await request( app.getHttpServer() )
        .get( `/veiculos/${plate}/${cpf}/debitos` );
      expect( resposta.status ).toBe( 200 );
    } );
    then( 'o sistema retorna uma lista com o tipo de debito selecionado', () => {
      pending();
    } );
  } );

  test( 'O usuario não possui nenhum débito', ( { given, when, then } ) => {
    given( 'o usuario informa a placa do veiculo', async () => {
      plate = 'XXX0000';
    } );
    given( 'informa o CPF ou CNPJ do proprietario', async () => {
      cpf = '2345678910';
    } );
    when( 'o usuario solicitar uma lista de debitos', async () => {
      resposta = await request( app.getHttpServer() )
        .get( `/veiculos/${plate}/${cpf}/debitos` );
      expect( resposta.status ).toBe( 200 );
    } );
    then( 'o sistema retorna uma lista com nenhum debito', async () => {
      dataVehicle = resposta.body;
      expect( dataVehicle.ObterDebitosResult.Debito ).toBeNull();
    } );
  } );
} );
