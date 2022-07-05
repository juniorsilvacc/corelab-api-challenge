import { Request, Response } from 'express';
import { VehicleRepository } from '../repositories/implementations/vehicle-implementations';
import { AllVehiclesService } from '../services/all-vehicles-service';

class AllVehiclesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const vehiclesRepository = new VehicleRepository();
    const allVehiclesService = new AllVehiclesService(vehiclesRepository);

    const vehicles = await allVehiclesService.execute();

    return response.status(200).json(vehicles);
  }
}

export { AllVehiclesController };
