import { loadFeature, defineFeature } from '../node_modules/jest-cucumber';

const feature = loadFeature( './test/features/acessar_infracoes_motorista.feature' );

defineFeature( feature, test => {
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
} );