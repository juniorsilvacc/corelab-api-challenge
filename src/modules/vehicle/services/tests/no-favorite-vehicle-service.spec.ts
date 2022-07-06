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
});
