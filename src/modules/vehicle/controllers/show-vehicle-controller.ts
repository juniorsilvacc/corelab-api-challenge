import { Request, Response } from 'express';
import { VehicleRepository } from '../repositories/implementations/vehicle-implementations';
import { ShowVehicleService } from '../services/show-vehicle-service';

class ShowVehicleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const vehiclesRepository = new VehicleRepository();
    const showVehicleService = new ShowVehicleService(vehiclesRepository);

    const vehicle = await showVehicleService.execute({ id });

    return response.status(200).json(vehicle);
  }
}

export { ShowVehicleController };
