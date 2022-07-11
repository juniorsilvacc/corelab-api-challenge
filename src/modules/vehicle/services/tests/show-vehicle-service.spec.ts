import { Error } from '../../../../config/errors/error';
import { VehicleRepositoryInMemory } from '../../repositories/in-memory/in-memory-vehicle';
import { ShowVehicleService } from '../show-vehicle-service';

let vehicleRepositoryInMemory: VehicleRepositoryInMemory;
let showVehicle: ShowVehicleService;

describe('Show Vehicles', () => {
  beforeEach(() => {
    vehicleRepositoryInMemory = new VehicleRepositoryInMemory();
    showVehicle = new ShowVehicleService(vehicleRepositoryInMemory);
  });

  it('should be able to show a vehicle', async () => {
    const vehicle = await vehicleRepositoryInMemory.create({
      user_id: '2f860026-95cf-4942-8f01-9af157986a90',
      name: 'First 1',
      description: 'This is a description',
      plate: 'DDT-0007',
      year: 2020,
      color: '#ff00ff',
      price: 22000,
    });

    const user = await showVehicle.execute({
      id: vehicle.id,
    });

    expect(user).toBe(vehicle);
  });

  it('should be able to not show vihicle non-existing', async () => {
    await expect(
      showVehicle.execute({
        id: 'non-existing',
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
