import { loadFeature, defineFeature } from '../node_modules/jest-cucumber';
import request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { DetranModule } from '../src/detran/detran.module';
const feature = loadFeature( './test/features/acessar_infracoes_motorista.feature' );
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

  test( 'Exibindo as infrações', ( {
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
    when( 'o usuario solicitar exibir as infrações', () => {
      pending();
    } );
    then(
      'o sistema retorna todas as infrações do usuario',
      () => {
        pending();
      },
    );
  } );

  test( 'Não existe infrações', ( { given, when, then } ) => {
    given( 'O usuário informou uma CNH', () => {
      pending();
    } );
    given( 'informou o CPF', () => {
      pending();
    } );
    given( 'informou o numero da cedula da CNH', () => {
      pending();
    } );
    when( 'o usuario solicitar exibir as infrações', () => {
      pending();
    } );
    then( 'o sistema retorna uma mensagem informando que é não existe nenhuma infração para aquela CNH', () => {
      pending();
    } );
  } );

  afterAll( async () => {
    await app.close();
  } );
} );