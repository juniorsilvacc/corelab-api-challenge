import { Error } from '../../../../config/errors/error';
import { VehicleRepositoryInMemory } from '../../repositories/in-memory/in-memory-vehicle';
import { FavoriteVehicleService } from '../favorite-vehicle-service';

let vehicleRepositoryInMemory: VehicleRepositoryInMemory;
let favoriteVehicleService: FavoriteVehicleService;

describe('Favorite Vehicle', () => {
  beforeEach(() => {
    vehicleRepositoryInMemory = new VehicleRepositoryInMemory();
    favoriteVehicleService = new FavoriteVehicleService(
      vehicleRepositoryInMemory,
    );
  });

  it('should not be able to favorite a vehicle does not exists', async () => {
    await expect(
      favoriteVehicleService.execute({
        id: 'non-exists',
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('shold be ablet to favorite a vehicle', async () => {
    const vehicle = await vehicleRepositoryInMemory.create({
      user_id: '2f860026-95cf-4942-8f01-9af157986a90',
      name: 'First Vehicle',
      description: 'This is a description of first vehicle',
      plate: 'DDT-0007',
      year: 2020,
      color: '#ff00ff',
      price: 22000,
    });

    await favoriteVehicleService.execute({
      id: vehicle.id,
    });

    expect(vehicle.isFavorite).toBe(true);
  });
});
