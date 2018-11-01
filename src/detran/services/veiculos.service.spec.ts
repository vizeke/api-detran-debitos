import { Test, TestingModule } from '@nestjs/testing';
import { VeiculosService } from './veiculos.service';
jest.mock( './veiculos.service' );

let placa: string;
let doc_proprietario: string;
let respostaDoTeste: any;

describe( 'VeiculosService', () => {
  let service: VeiculosService;
  beforeAll( async () => {
    const module: TestingModule = await Test.createTestingModule( {
      providers: [ VeiculosService ],
    } ).compile();
    service = module.get<VeiculosService>( VeiculosService );
  } );

  it( 'SearchVehicle() com dados válidos deve retornar dados do veículo', async () => {
    placa = 'VAL1705';
    doc_proprietario = '9876543210';
    respostaDoTeste = await service.getDataVeiculosWS( placa, doc_proprietario );
    expect( respostaDoTeste.ObterDadosVeiculoResult )
      .toBe( 'JOSE SILVA' );
  } );

  it( 'SearchVehicle() com dados errados deve retornar mensagem de erro', async () => {
    placa = 'arrays começam em 1';
    doc_proprietario = 'usem goto! é legal sim abiguinhos';
    respostaDoTeste = await service.getDataVeiculosWS( placa, doc_proprietario );
    expect( respostaDoTeste.ObterDadosVeiculoResult.MensagemErro )
      .toBe( 'Veículo não encontrado.' );
  } );

  it( 'SearchVehicle() com dados de veículo roubado deve impedir a consulta', async () => {
    placa = 'ROU8470';
    doc_proprietario = '12345678910';
    respostaDoTeste = await service.getDataVeiculosWS( placa, doc_proprietario );
    expect( respostaDoTeste.ObterDadosVeiculoResult.MensagemErro )
      .toBe( 'Consulta não permitida para veículo com registro de furto/roubo ativo' );
  } );

  /* GetTickets() */

  it( 'GetTickets() com dados válidos deve retornar uma lista com todoso os debitos', async () => {
    placa = 'VAL1705';
    doc_proprietario = '9876543210';
    respostaDoTeste = await service.getDebits( placa, doc_proprietario );
    expect( Object.keys(respostaDoTeste.ObterDebitosResult.Debito)[0] )
      .toBe( 'Debito' );
  } );

  it( 'GetTickets() com dados inválidos ou veiculo não pussui debitos deve retornar uma lista vazia de debitos', async () => {
    placa = 'XXX0000';
    doc_proprietario = '12345678910';
    respostaDoTeste = await service.getDebits( placa, doc_proprietario );
    console.log('____________________', respostaDoTeste.ObterDebitosResult.Debito),
    expect( respostaDoTeste.ObterDebitosResult.Debito )
      .toBe( null );
  } );

} );
