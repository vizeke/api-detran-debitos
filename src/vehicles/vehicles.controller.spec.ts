import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesController } from './vehicles.controller';

describe('Vehicles Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [VehiclesController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: VehiclesController = module.get<VehiclesController>(VehiclesController);
    expect(controller).toBeDefined();
  });
});
