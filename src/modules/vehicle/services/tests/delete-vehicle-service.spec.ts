import { Error } from '../../../../config/errors/error';
import { VehicleRepositoryInMemory } from '../../repositories/in-memory/in-memory-vehicle';
import { DeleteVehicleService } from '../delete-vehicle-service';

let vehicleRepositoryInMemory: VehicleRepositoryInMemory;
let deleteVehicleService: DeleteVehicleService;

describe('Delete Vehicle', () => {
  beforeEach(() => {
    vehicleRepositoryInMemory = new VehicleRepositoryInMemory();
    deleteVehicleService = new DeleteVehicleService(vehicleRepositoryInMemory);
  });

  it('should be able to delete a vehicle', async () => {
    const vehicle = await vehicleRepositoryInMemory.create({
      user_id: '2f860026-95cf-4942-8f01-9af157986a90',
      name: 'First Vehicle',
      description: 'This is a description of first vehicle',
      plate: 'DDT-0007',
      year: 2020,
      color: '#ff00ff',
      price: 22000,
    });

    const deleteVehicle = await vehicleRepositoryInMemory.deleteVehicle(
      vehicle.id,
    );

    expect(deleteVehicle).toBeUndefined();
  });

  it('should not be able to delete a vehicle dost not exists', async () => {
    expect(
      deleteVehicleService.execute({
        id: 'non-exists',
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
