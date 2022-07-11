import { Error } from '../../../config/errors/error';
import { Vehicle } from '../models/vehicle-model';
import { IVehiclesRepository } from '../repositories/vehicle-repository';

interface IRequest {
  id: string;
  name: string;
  description: string;
  plate: string;
  year: number;
  color: string;
  price: number;
}

class UpdateVehicleService {
  constructor(private readonly vehiclesRepository: IVehiclesRepository) {}

  async execute({
    id,
    name,
    description,
    plate,
    year,
    color,
    price,
  }: IRequest): Promise<Vehicle> {
    const vehicle = await this.vehiclesRepository.findById(id);

    if (!vehicle) {
      throw new Error('Vehicle not found');
    }

    const vehicleExist = await this.vehiclesRepository.findByPlate(plate);

    //Garantir não fazer update com a mesma placa se caso já existir
    if (vehicleExist && plate !== vehicle.plate) {
      throw new Error('The Vehicle already exists');
    }

    vehicle.name = name;
    vehicle.description = description;
    vehicle.plate = plate;
    vehicle.year = year;
    vehicle.color = color;
    vehicle.price = price;

    return await this.vehiclesRepository.save(vehicle);
  }
}

export { UpdateVehicleService };
