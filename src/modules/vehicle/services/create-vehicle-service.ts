import { IVehiclesRepository } from '../repositories/vehicle-repository';

interface IRequest {
  name: string;
  description: string;
  plate: string;
  year: number;
  color: string;
  price: number;
}

class CreateVehicleService {
  constructor(private readonly vehiclesRepository: IVehiclesRepository) {}

  async execute({
    name,
    description,
    plate,
    year,
    color,
    price,
  }: IRequest): Promise<void> {
    const vehicle = await this.vehiclesRepository.findByPlate(plate);

    if (vehicle) {
      throw new Error('Vehicle already exists');
    }

    await this.vehiclesRepository.create({
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
