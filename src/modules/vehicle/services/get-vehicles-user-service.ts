import { Vehicle } from '../models/vehicle-model';
import { IVehiclesRepository } from '../repositories/vehicle-repository';

class GetVehiclesUserService {
  constructor(private readonly vehiclesRepository: IVehiclesRepository) {}

  async execute(): Promise<Vehicle[]> {
    const vehicle = await this.vehiclesRepository.findAll();

    return vehicle;
  }
}

export { GetVehiclesUserService };
