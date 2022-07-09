import { Error } from '../../../config/errors/error';
import { Vehicle } from '../models/vehicle-model';
import { IVehiclesRepository } from '../repositories/vehicle-repository';

interface IRequest {
  id: string;
}

class ShowVehicleService {
  constructor(private readonly vehiclesRepository: IVehiclesRepository) {}

  async execute({ id }: IRequest): Promise<Vehicle> {
    const vehicle = await this.vehiclesRepository.findById(id);

    if (!vehicle) {
      throw new Error('Vehicle not found');
    }

    return vehicle;
  }
}

export { ShowVehicleService };
