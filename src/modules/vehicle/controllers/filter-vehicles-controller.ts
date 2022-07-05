import { Request, Response } from 'express';
import { VehicleRepository } from '../repositories/implementations/vehicle-implementations';
import { FilterVehiclesService } from '../services/filter-vehicles-service';

class FilterVehiclesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, plate, year, color, price } = request.query;

    const vehiclesRepository = new VehicleRepository();
    const filterVehiclesService = new FilterVehiclesService(vehiclesRepository);

    const vehicles = await filterVehiclesService.execute({
      name: name as string,
      plate: plate as string,
      year: year as unknown as number,
      color: color as string,
      price: price as unknown as number,
    });

    return response.status(200).json(vehicles);
  }
}

export { FilterVehiclesController };
