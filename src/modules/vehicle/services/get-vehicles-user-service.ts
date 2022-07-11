import { Vehicle } from '../models/vehicle-model';
import { IVehiclesRepository } from '../repositories/vehicle-repository';

interface IRequest {
  user_id: string;
}

class GetVehiclesUserService {
  constructor(private readonly vehiclesRepository: IVehiclesRepository) {}

  async execute({ user_id }: IRequest): Promise<Vehicle[]> {
    const vehicle = await this.vehiclesRepository.findVehiclesUser(user_id);

    return vehicle;
  }
}

export { GetVehiclesUserService };
