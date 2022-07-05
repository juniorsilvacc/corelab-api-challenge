import { Request, Response } from 'express';
import { VehicleRepository } from '../repositories/implementations/vehicle-implementations';
import { GetVehiclesUserService } from '../services/get-vehicles-user-service';

class GetVehiclesUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const vehiclesRepository = new VehicleRepository();
    const getVehiclesUserService = new GetVehiclesUserService(
      vehiclesRepository,
    );

    const vehicles = await getVehiclesUserService.execute({ user_id });

    return response.status(200).json(vehicles);
  }
}

export { GetVehiclesUserController };
