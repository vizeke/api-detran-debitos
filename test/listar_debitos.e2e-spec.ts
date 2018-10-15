import { loadFeature, defineFeature } from '../node_modules/jest-cucumber';

const feature = loadFeature('./test/features/usuario.feature');

defineFeature(feature, test => {
  test('Listando uma prévia dos tipos de debitos do usuario', ({
    given,
    when,
    then,
  }) => {
    given('o usuario informa a placa do veiculo', () => {
      pending();
    });
    when('o usuario solicitar uma previa da lista de debitos', () => {
      pending();
    });
    then(
      'o sistema retorna uma lista com a previa de todos os tipos de debitos',
      () => {
        pending();
      },
    );
  });

  test('Listando todos os debitos do usuario', ({ given, when, then }) => {
    given('o usuario informa a placa do veiculo', () => {
      pending();
    });
    when('o usuario solicitar uma lista com todos debitos', () => {
      pending();
    });
    then('o sistema retorna uma lista com todos os debitos', () => {
      pending();
    });
  });

  test('Listando todos os debitos por tipo de debito', ({
    given,
    when,
    then,
  }) => {
    given('o usuario informa a placa do veiculo', () => {
      pending();
    });
    when('o usuario solicitar uma lista de debitos do tipo selecionado', () => {
      pending();
    });
    then('o sistema retorna uma lista com o tipo de debito selecionado', () => {
      pending();
    });
  });
});
