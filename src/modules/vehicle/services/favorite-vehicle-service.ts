import { Error } from '../../../config/errors/error';
import { Vehicle } from '../models/vehicle-model';
import { IVehiclesRepository } from '../repositories/vehicle-repository';

interface IRequest {
  id: string;
}

class FavoriteVehicleService {
  constructor(private readonly vehiclesRepository: IVehiclesRepository) {}

  async execute({ id }: IRequest): Promise<Vehicle> {
    const vehicle = await this.vehiclesRepository.findById(id);

    if (!vehicle) {
      throw new Error('Vehicle not found');
    }

    vehicle.isFavorite = true;

    return await this.vehiclesRepository.save(vehicle);
  }
}

export { FavoriteVehicleService };
