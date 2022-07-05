import { Error } from '../../../config/errors/error';
import { IVehiclesRepository } from '../repositories/vehicle-repository';

interface IRequest {
  id: string;
}

class DeleteVehicleService {
  constructor(private readonly vehiclesRepository: IVehiclesRepository) {}

  async execute({ id }: IRequest): Promise<void> {
    const vehicle = await this.vehiclesRepository.findById(id);

    if (!vehicle) {
      throw new Error('Vehicle not found');
    }

    await this.vehiclesRepository.deleteVehicle(id);
  }
}

export { DeleteVehicleService };
