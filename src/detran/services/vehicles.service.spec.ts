import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesService } from './vehicles.service';
jest.mock( './vehicles.service' );

let plate: string;
let owner_document: string;
let respostaDoTeste: any;

describe( 'VehiclesService', () => {
  let service: VehiclesService;
  beforeAll( async () => {
    const module: TestingModule = await Test.createTestingModule( {
      providers: [ VehiclesService ],
    } ).compile();
    service = module.get<VehiclesService>( VehiclesService );
  } );



  it( 'SearchVehicle() com dados válidos deve retornar dados do proprietário', async () => {
    plate = 'VAL1705';
    owner_document = '9876543210';
    respostaDoTeste = await service.searchVehicle( plate, owner_document );
    expect( respostaDoTeste.ObterDadosVeiculoResult.VeiculoInfo.Nome )
      .toBe( "JOSE SILVA" );
  } );



  it( 'SearchVehicle() com dados errados deve retornar mensagem de erro', async () => {
    plate = 'arrays começam em 1';
    owner_document = 'usem goto! é legal sim abiguinhos';
    respostaDoTeste = await service.searchVehicle( plate, owner_document );
    expect( respostaDoTeste.ObterDadosVeiculoResult.MensagemErro )
      .toBe( 'Veículo não encontrado.' );
  } );


  it( 'SearchVehicle() com dados de veículo roubado deve impedir a consulta', async () => {
    plate = 'ROU8470';
    owner_document = '12345678910';
    respostaDoTeste = await service.searchVehicle( plate, owner_document );
    expect( respostaDoTeste.ObterDadosVeiculoResult.MensagemErro )
      .toBe( 'Consulta não permitida para veículo com registro de furto/roubo ativo' );
  } );

  /* GetTickets() */

  it( 'GetTickets() com dados válidos deve retornar uma lista com todoso os debitos', async () => {
    plate = 'VAL1705';
    owner_document = '9876543210';
    respostaDoTeste = await service.getTickets( plate, owner_document );
    expect( Object.keys(respostaDoTeste.ObterDebitosResult.Debito)[0] )
      .toBe( 'Debito' );
  } );

  it( 'GetTickets() com dados inválidos ou veiculo não pussui debitos deve retornar uma lista vazia de debitos', async () => {
    plate = 'XXX0000';
    owner_document = '12345678910';
    respostaDoTeste = await service.getTickets( plate, owner_document );
    console.log('____________________', respostaDoTeste.ObterDebitosResult.Debito),
    expect( respostaDoTeste.ObterDebitosResult.Debito )
      .toBe( null );
  } );

} );
