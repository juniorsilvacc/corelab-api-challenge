import { Error } from '../../../config/errors/error';
import { ICreateVehicleDTO } from '../dtos/create-vehicle-dto';
import { IVehiclesRepository } from '../repositories/vehicle-repository';
import { Vehicle } from '../models/vehicle-model';

class CreateVehicleService {
  constructor(private readonly vehiclesRepository: IVehiclesRepository) {}

  async execute({
    user_id,
    name,
    description,
    plate,
    year,
    color,
    price,
  }: ICreateVehicleDTO): Promise<Vehicle> {
    const vehicle = await this.vehiclesRepository.findByPlate(plate);

    if (vehicle) {
      throw new Error('Vehicle already exists');
    }

    return await this.vehiclesRepository.create({
      user_id,
      name,
      description,
      plate,
      year,
      color,
      price,
    });
  }
}

export { CreateVehicleService };
