import { VehicleRepositoryInMemory } from '../../repositories/in-memory/in-memory-vehicle';
import { AllVehiclesService } from '../all-vehicles-service';
import { CreateVehicleService } from '../create-vehicle-service';

let vehicleRepositoryInMemory: VehicleRepositoryInMemory;
let createVehicle: CreateVehicleService;
let allVehicle: AllVehiclesService;

describe('All Vehicle', () => {
  beforeEach(() => {
    vehicleRepositoryInMemory = new VehicleRepositoryInMemory();
    allVehicle = new AllVehiclesService(vehicleRepositoryInMemory);
    createVehicle = new CreateVehicleService(vehicleRepositoryInMemory);
  });

  it('should be able to list all vehicle', async () => {
    const vehicleOne = await createVehicle.execute({
      user_id: '2f860026-95cf-4942-8f01-9af157986a90',
      name: 'First Vehicle 1',
      description: 'This is a description of first vehicle',
      plate: 'DDT-0001',
      year: 2020,
      color: '#ff00ff',
      price: 22000,
    });

    const vehicleTwo = await createVehicle.execute({
      user_id: '9af157986a90-4942-8f01-4942-8f01',
      name: 'First Vehicle 2',
      description: 'This is a description of first vehicle',
      plate: 'DDT-0002',
      year: 2019,
      color: '#ff0000',
      price: 42000,
    });

    const vehicles = await allVehicle.execute();

    expect(vehicles).toEqual([vehicleOne, vehicleTwo]);
  });
});
