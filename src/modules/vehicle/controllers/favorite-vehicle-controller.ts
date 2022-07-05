import { Request, Response } from 'express';
import { VehicleRepository } from '../repositories/implementations/vehicle-implementations';
import { FavoriteVehicleService } from '../services/favorite-vehicle-service';

class FavoriteVehicleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const vehiclesRepository = new VehicleRepository();
    const favoriteVehicleService = new FavoriteVehicleService(
      vehiclesRepository,
    );

    await favoriteVehicleService.execute({ id });

    return response.status(200).json();
  }
}

export { FavoriteVehicleController };
