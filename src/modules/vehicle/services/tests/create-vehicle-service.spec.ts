import { Error } from '../../../../config/errors/error';
import { VehicleRepositoryInMemory } from '../../repositories/in-memory/in-memory-vehicle';
import { CreateVehicleService } from '../create-vehicle-service';

let vehicleRepositoryInMemory: VehicleRepositoryInMemory;
let createVehicle: CreateVehicleService;

describe('Create Vehicle', () => {
  beforeEach(() => {
    vehicleRepositoryInMemory = new VehicleRepositoryInMemory();
    createVehicle = new CreateVehicleService(vehicleRepositoryInMemory);
  });

  it('should be able to create a new vehicle', async () => {
    const vehicle = await createVehicle.execute({
      user_id: '2f860026-95cf-4942-8f01-9af157986a90',
      name: 'First Vehicle',
      description: 'This is a description of first vehicle',
      plate: 'DDT-0007',
      year: 2020,
      color: '#ff00ff',
      price: 22000,
    });

    expect(vehicle).toHaveProperty('id');
  });

  it('shold not be able to create a new vehicle with the same plate', async () => {
    await createVehicle.execute({
      user_id: '2f860026-95cf-4942-8f01-9af157986a90',
      name: 'First Vehicle 1',
      description: 'This is a description of first vehicle',
      plate: 'DDT-0007',
      year: 2019,
      color: '#ff00ff',
      price: 3200,
    });

    await expect(
      createVehicle.execute({
        user_id: '2f860026-95cf-4942-8f01-9af157986a90',
        name: 'First Vehicle 2',
        description: 'This is a description of first vehicle',
        plate: 'DDT-0007',
        year: 2022,
        color: '#f0f0f0',
        price: 42000,
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
