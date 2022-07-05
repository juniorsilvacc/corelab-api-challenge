import { Vehicle } from '../models/vehicle-model';
import { IVehiclesRepository } from '../repositories/vehicle-repository';

interface IRequest {
  name?: string;
  plate?: string;
  year?: number;
  color?: string;
  price?: number;
}

class FilterVehiclesService {
  constructor(private readonly vehiclesRepository: IVehiclesRepository) {}

  async execute({
    name,
    plate,
    year,
    color,
    price,
  }: IRequest): Promise<Vehicle[]> {
    const vehicle = await this.vehiclesRepository.filterVehicles(
      name,
      plate,
      year,
      color,
      price,
    );

    return vehicle;
  }
}

export { FilterVehiclesService };
