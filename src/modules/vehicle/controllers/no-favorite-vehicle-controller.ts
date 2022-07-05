import { Request, Response } from 'express';
import { VehicleRepository } from '../repositories/implementations/vehicle-implementations';
import { NoFavoriteVehicleService } from '../services/no-favorite-vehicle-service';

class NoFavoriteVehicleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const vehiclesRepository = new VehicleRepository();
    const noFavoriteVehicleService = new NoFavoriteVehicleService(
      vehiclesRepository,
    );

    await noFavoriteVehicleService.execute({ id });

    return response.status(200).json();
  }
}

export { NoFavoriteVehicleController };
