import { loadFeature, defineFeature } from '../node_modules/jest-cucumber';

const feature = loadFeature( './test/features/acessar_dados_motorista.feature' );

defineFeature( feature, test => {
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
} );