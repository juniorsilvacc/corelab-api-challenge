import { Request, Response } from 'express';
import { VehicleRepository } from '../repositories/implementations/vehicle-implementations';
import { DeleteVehicleService } from '../services/delete-vehicle-service';

class DeleteVehicleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const vehiclesRepository = new VehicleRepository();
    const deleteVehicleService = new DeleteVehicleService(vehiclesRepository);

    await deleteVehicleService.execute({ id });

    return response.status(204).json();
  }
}

export { DeleteVehicleController };
