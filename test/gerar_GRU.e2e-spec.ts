import { loadFeature, defineFeature } from '../node_modules/jest-cucumber';

const feature = loadFeature( './test/features/gerar_GRU.feature' );

defineFeature( feature, test => {
  test( 'Selecionando alguns debitos', ( {
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

  test( 'Selecionando um débito que possuem outros tipos de débitos obrigatorios', ( { given, when, then } ) => {
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

  test( 'Selecionando todos debitos', ( { given, when, then } ) => {
    given( 'O usuario possui debitos', () => {
      pending();
    } );
    when( 'o usuario deseja pagar todos os debitos', () => {
      pending();
    } );
    when( 'solicita a geração da GRU', () => {
      pending();
    } );
    then( 'o sistema retorna a GRU com os debitos', () => {
      pending();
    } );
  } );

  test( 'Nenhum debito selecionado', ( { given, when, then } ) => {
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

  test( 'Selecionando um tipo de debito que possui débitos anteriores', ( { given, when, then } ) => {
    given( 'O usuario possui débitos atrasdos', () => {
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