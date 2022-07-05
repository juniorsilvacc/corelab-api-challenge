import { Request, Response } from 'express';
import { VehicleRepository } from '../repositories/implementations/vehicle-implementations';
import { UpdateVehicleService } from '../services/update-vehicle-service';

class UpdateVehicleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description, plate, year, color, price } = request.body;

    const vehiclesRepository = new VehicleRepository();
    const updateVehicleService = new UpdateVehicleService(vehiclesRepository);

    await updateVehicleService.execute({
      id,
      name,
      description,
      plate,
      year,
      color,
      price,
    });

    return response.status(200).json();
  }
}

export { UpdateVehicleController };
