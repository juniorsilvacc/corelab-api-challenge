import { Request, Response } from 'express';
import { VehicleRepository } from '../repositories/implementations/vehicle-implementations';
import { CreateVehicleService } from '../services/create-vehicle-service';

class CreateVehicleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { name, description, plate, year, color, price } = request.body;

    const vehiclesRepository = new VehicleRepository();
    const createVehicleService = new CreateVehicleService(vehiclesRepository);

    const vehicle = await createVehicleService.execute({
      user_id: id,
      name,
      description,
      plate,
      year,
      color,
      price,
    });

    return response.status(201).json(vehicle);
  }
}

export { CreateVehicleController };
