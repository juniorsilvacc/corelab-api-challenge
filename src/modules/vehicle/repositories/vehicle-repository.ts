import { ICreateVehicleDTO } from '../dtos/create-vehicle-dto';
import { Vehicle } from '../models/vehicle-model';

interface IVehiclesRepository {
  create(data: ICreateVehicleDTO): Promise<void>;
  findById(id: string): Promise<Vehicle | null>;
  findByPlate(plate: string): Promise<Vehicle | null>;
}

export { IVehiclesRepository };
