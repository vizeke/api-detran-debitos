import { Test, TestingModule } from '@nestjs/testing';
import { VeiculosService } from './veiculos.service';
jest.mock( './veiculos.service' );

let params: any;
let respostaDoTeste: any;

describe( 'VeiculosService', () => {
  let service: VeiculosService;
  beforeAll( async () => {
    const module: TestingModule = await Test.createTestingModule( {
      providers: [ VeiculosService ],
    } ).compile();
    service = module.get<VeiculosService>( VeiculosService );
  } );

  it( 'getDadosVeiculos() com dados válidos deve retornar dados do veículo', async () => {
    params = {
      placa: 'VAL1705',
      renavam: '98765432101',
    };
    respostaDoTeste = await service.getDadosVeiculos( params );
    expect( Object.keys(respostaDoTeste.res)[0])
      .toBe( 'plate' );
  } );

  it( 'getDadosVeiculosWS() com dados errados deve retornar mensagem de erro', async () => {
    params = {
      placa: 'AB45SD2',
      renavam: '12345678910',
    };
    respostaDoTeste = await service.getDadosVeiculos(  params );
    expect( respostaDoTeste.res.mensagemErro )
      .toBe( 'Veículo não encontrado.' );
  } );

  it( 'getDadosVeiculos() com dados de veículo roubado deve impedir a consulta', async () => {
    params = {
      placa: 'ROU8470',
      renavam: '12345678910',
    };
    respostaDoTeste = await service.getDadosVeiculos(  params );
    expect( respostaDoTeste.res.mensagemErro )
      .toBe( 'Consulta não permitida para veículo com registro de furto/roubo ativo' );
  } );

  /* getDebitos() */
  it( 'getDebitos() com dados válidos deve retornar uma lista com todoso os debitos', async () => {
    params = {
      placa: 'VAL1705',
      renavam: '98765432101',
    };
    respostaDoTeste = await service.getDebitos(  params );

    expect( respostaDoTeste.res.debitos[0].description )
      .toBe( 'Licenciamento Anual 2018' );
  } );

  it( 'getDebitos() com dados inválidos ou veiculo não pussui debitos deve retornar uma mensagem', async () => {
    params = {
      placa: 'XXX0000',
      renavam: '12345678910',
    };
    respostaDoTeste = await service.getDebitos(  params );
    expect( respostaDoTeste.res.debitos[0] )
      .toBe( 'Não foram encontrados debitos para esse veiculo.' );
  } );

  /* getDebitosPreview() */
  it( 'getDebitosPreview() com dados válidos deve retornar uma lista de uma previa dos débitos', async () => {
    params = {
      placa: 'VAL1705',
      renavam: '98765432101',
    };
    respostaDoTeste = await service.getDebitosPreview(  params );
    expect( Object.keys(respostaDoTeste.res)[0] )
      .toBe( 'temLicenciamentoAnual' );
  } );

  /* getTiposDebitos() */
  it( 'getTiposDebitos() com dados válidos deve retornar uma lista com somente um tipo de débito', async () => {
    params = {
      placa: 'VAL1705',
      renavam: '98765432101',
      tipo_debito: 'IPVA',
    };
    respostaDoTeste = await service.getTiposDebitos(  params );
    expect( respostaDoTeste.res.debitos[0].description )
      .toBe( 'IPVA 4ª Cota 2018' );
  } );

  /* gerarGRU() */
  it( 'getTiposDebitos() somente com a placa do carro e o documento do proprietario', async () => {
    params = {
      placa: 'ABC1234',
      renavam: '98765432101',
    };
    respostaDoTeste = await service.gerarGRU( params );
    expect( Object.keys(respostaDoTeste.res)[0] )
      .toBe( 'guia' );
  } );
} );
