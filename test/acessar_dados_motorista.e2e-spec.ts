import { loadFeature, defineFeature } from '../node_modules/jest-cucumber';
import request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { DetranModule } from '../src/detran/detran.module';
const feature = loadFeature( './test/features/acessar_dados_motorista.feature' );
jest.mock( '../src/detran/detran.module' );
jest.mock( '../src/detran/services/veiculos.service' );

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
  test( 'Exibindo os dados na CNH', ( {
    given,
    when,
    then,
  } ) => {
    given( 'O usuário informou uma CNH', () => {
      pending();
    } );
    given( 'informou o CPF', () => {
      pending();
    } );
    given( 'informou o numero da cedula da CNH', () => {
      pending();
    } );
    when( 'o usuario solicitar a situação da CNH', () => {
      pending();
    } );
    then( `o sistema retorna as seguintes informações da CNH: situação da CNH, motivo do bloqueio, data de expiração, pontos de infrações, existe processo de habilitacao, existe processo administrativo`,
      () => {
        pending();
      },
    );
  } );

  test( 'Nenhuma CNH cadastrada', ( { given, when, then } ) => {
    given( 'O usuário informou uma CNH', () => {
      pending();
    } );
    given( 'informou o CPF', () => {
      pending();
    } );
    given( 'informou o numero da cedula da CNH', () => {
      pending();
    } );
    when( 'o usuario solicitar a situação da CNH', () => {
      pending();
    } );
    then( 'o sistema retorna uma mensagem informando que não há CNH cadastrada para aquela CNH', () => {
      pending();
    } );
  } );

  test( 'Exibir os dados do condutor', ( { given, when, then } ) => {
    given( 'O usuario informa o CPF', () => {
      pending();
    } );
    when( 'o usuario solicitar exibir os dados do condutor', () => {
      pending();
    } );
    then( 'o sistema retorna os dados do condutor', () => {
      pending();
    } );
  } );

  afterAll( async () => {
    await app.close();
  } );
} );