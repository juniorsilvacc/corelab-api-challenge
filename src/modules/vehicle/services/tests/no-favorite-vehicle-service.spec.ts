import { Error } from '../../../../config/errors/error';
import { VehicleRepositoryInMemory } from '../../repositories/in-memory/in-memory-vehicle';
import { NoFavoriteVehicleService } from '../no-favorite-vehicle-service';

let vehicleRepositoryInMemory: VehicleRepositoryInMemory;
let noFavoriteVehicleService: NoFavoriteVehicleService;

describe('Disfavor Vehicle', () => {
  beforeEach(() => {
    vehicleRepositoryInMemory = new VehicleRepositoryInMemory();
    noFavoriteVehicleService = new NoFavoriteVehicleService(
      vehicleRepositoryInMemory,
    );
  });

  it('should not be able to no favorite a vehicle dost not exists', async () => {
    await expect(
      noFavoriteVehicleService.execute({
        id: 'non-exists',
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('shold be ablet to no favorite a vehicle', async () => {
    const vehicle = await vehicleRepositoryInMemory.create({
      user_id: '2f860026-95cf-4942-8f01-9af157986a90',
      name: 'First Vehicle',
      description: 'This is a description of first vehicle',
      plate: 'DDT-0007',
      year: 2020,
      color: '#ff00ff',
      price: 22000,
    });

    await noFavoriteVehicleService.execute({
      id: vehicle.id,
    });

    expect(vehicle.isFavorite).toBe(false);
  });
});
