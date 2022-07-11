import { VehicleRepositoryInMemory } from '../../repositories/in-memory/in-memory-vehicle';
import { GetVehiclesUserService } from '../get-vehicles-user-service';

let vehicleRepositoryInMemory: VehicleRepositoryInMemory;
let getVehiclesUser: GetVehiclesUserService;

describe('All User Vehicles', () => {
  beforeEach(() => {
    vehicleRepositoryInMemory = new VehicleRepositoryInMemory();
    getVehiclesUser = new GetVehiclesUserService(vehicleRepositoryInMemory);
  });

  it('should be able to list all user vehicle', async () => {
    const vehicleOne = await vehicleRepositoryInMemory.create({
      user_id: '2f860026-95cf-4942-8f01-9af157986a90',
      name: 'First 1',
      description: 'This is a description',
      plate: 'DDT-0007',
      year: 2020,
      color: '#ff00ff',
      price: 22000,
    });

    const user = await getVehiclesUser.execute({
      user_id: '2f860026-95cf-4942-8f01-9af157986a90',
    });

    expect([user]).toEqual([vehicleOne]);
  });
});
