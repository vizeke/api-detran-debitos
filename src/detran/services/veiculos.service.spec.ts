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
      doc_proprietario: '98765432101112',
    };
    respostaDoTeste = await service.getDadosVeiculos( params );
    expect( Object.keys(respostaDoTeste.res)[0])
      .toBe( 'VeiculoInfo' );
  } );

  it( 'getDadosVeiculosWS() com dados errados deve retornar mensagem de erro', async () => {
    params = {
      placa: 'AB45SD2',
      doc_proprietario: '12345678910',
    };
    respostaDoTeste = await service.getDadosVeiculos(  params );
    expect( respostaDoTeste.res.MensagemErro )
      .toBe( 'Veículo não encontrado.' );
  } );

  it( 'getDadosVeiculos() com dados de veículo roubado deve impedir a consulta', async () => {
    params = {
      placa: 'ROU8470',
      doc_proprietario: '12345678910',
    };
    respostaDoTeste = await service.getDadosVeiculos(  params );
    expect( respostaDoTeste.res.MensagemErro )
      .toBe( 'Consulta não permitida para veículo com registro de furto/roubo ativo' );
  } );

  /* getDebitos() */
  it( 'getDebitos() com dados válidos deve retornar uma lista com todoso os debitos', async () => {
    params = {
      placa: 'VAL1705',
      doc_proprietario: '98765432101112',
    };
    respostaDoTeste = await service.getDebitos(  params );
    expect( Object.keys(respostaDoTeste.res.Debito)[0] )
      .toBe( 'Debito' );
  } );

  it( 'getDebitos() com dados inválidos ou veiculo não pussui debitos deve retornar uma lista vazia de debitos', async () => {
    params = {
      placa: 'XXX0000',
      doc_proprietario: '12345678910',
    };
    respostaDoTeste = await service.getDebitos(  params );
    expect( respostaDoTeste.res.Debito )
      .toBe( null );
  } );

  /* getDebitosPreview() */
  it( 'getDebitosPreview() com dados válidos deve retornar uma lista de uma previa dos débitos', async () => {
    params = {
      placa: 'VAL1705',
      doc_proprietario: '98765432101112',
    };
    respostaDoTeste = await service.getDebitosPreview(  params );
    expect( Object.keys(respostaDoTeste.res)[0] )
      .toBe( 'TipoDebito' );
  } );

  /* getTiposDebitos() */
  it( 'getTiposDebitos() com dados válidos deve retornar uma lista com somente um tipo de débito', async () => {
    params = {
      placa: 'VAL1705',
      doc_proprietario: '98765432101112',
      tipo_debito: 'IPVA',
    };
    respostaDoTeste = await service.getTiposDebitos(  params );
    expect( Object.keys(respostaDoTeste.res)[0] )
      .toBe( 'Debito' );
  } );

  /* gerarGRU() */
  it( 'getTiposDebitos() somente com a placa do carro e o documento do proprietario', async () => {
    params = {
      placa: 'ABC1234',
      doc_proprietario: '98765432101112',
    };
    respostaDoTeste = await service.gerarGRU( params );
    expect( Object.keys(respostaDoTeste.res.Guia)[0] )
      .toBe( 'ItemGuia' );
  } );
} );
