import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesService } from './vehicles.service';
jest.mock( './vehicles.service' );

describe( 'VehiclesService', () => {
  let service: VehiclesService;
  beforeAll( async () => {
    const module: TestingModule = await Test.createTestingModule( {
      providers: [ VehiclesService ],
    } ).compile();
    service = module.get<VehiclesService>( VehiclesService );
  } );



  it( 'SearchVehicle() com dados válidos deve retornar dados do proprietário', async () => {
    let plate = 'VAL1705';
    let owner_document = '9876543210';
    let respostaDoTeste = await service.searchVehicle( plate, owner_document );
    expect( respostaDoTeste.ObterDadosVeiculoResult.VeiculoInfo.Nome )
      .toBe( "JOSE SILVA" );
  } );



  it( 'SearchVehicle() com dados errados deve retornar mensagem de erro', async () => {
    let plate = 'arrays começam em 1';
    let owner_document = 'usem goto! é legal sim abiguinhos';
    let respostaDoTeste = await service.searchVehicle( plate, owner_document );
    expect( respostaDoTeste.ObterDadosVeiculoResult.MensagemErro )
      .toBe( 'Veículo não encontrado.' );
  } );


  it( 'SearchVehicle() com dados de veículo roubado deve impedir a consulta', async () => {
    let plate = 'ROU8470';
    let owner_document = '12345678910';
    let respostaDoTeste = await service.searchVehicle( plate, owner_document );
    expect( respostaDoTeste.ObterDadosVeiculoResult.MensagemErro )
      .toBe( 'Consulta não permitida para veículo com registro de furto/roubo ativo' );
  } );


  //FAÇAM OS TESTES DO OUTRO MÉTODO SEGUINDO O EXEMPLO ACIMA.



} );
