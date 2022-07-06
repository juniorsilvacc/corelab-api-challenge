import { Error } from '../../../../config/errors/error';
import { VehicleRepositoryInMemory } from '../../repositories/in-memory/in-memory-vehicle';
import { UpdateVehicleService } from '../update-vehicle-service';

let vehicleRepositoryInMemory: VehicleRepositoryInMemory;
let updateVehicleService: UpdateVehicleService;

describe('Update Vehicle', () => {
  beforeEach(() => {
    vehicleRepositoryInMemory = new VehicleRepositoryInMemory();
    updateVehicleService = new UpdateVehicleService(vehicleRepositoryInMemory);
  });

  it('should not be able to update a vehicle does not exists', async () => {
    await expect(
      updateVehicleService.execute({
        id: 'non-exists',
        name: 'First Vehicle',
        description: 'This is a description of first vehicle',
        plate: 'DDT-0007',
        year: 2020,
        color: '#ff00ff',
        price: 22000,
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should not be able to change to another vehicle plate', async () => {
    await vehicleRepositoryInMemory.create({
      user_id: '9af157986a90-4942-4942-9af157986a90',
      name: 'First Vehicle 2',
      description: 'This is a description of first vehicle',
      plate: 'DDT-0007',
      year: 2020,
      color: '#ff00ff',
      price: 22000,
    });

    await expect(
      updateVehicleService.execute({
        id: '9af157986a90-4942-4942-9af157986a90',
        name: 'First Vehicle 2',
        description: 'This is a description of first vehicle',
        plate: 'DDT-0007',
        year: 2020,
        color: '#ff00ff',
        price: 22000,
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
