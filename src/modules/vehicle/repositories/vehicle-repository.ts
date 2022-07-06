import { ICreateVehicleDTO } from '../dtos/create-vehicle-dto';
import { Vehicle } from '../models/vehicle-model';

interface IVehiclesRepository {
  create(data: ICreateVehicleDTO): Promise<Vehicle>;
  findById(id: string): Promise<Vehicle | null>;
  findByPlate(plate: string): Promise<Vehicle | null>;
  findAll(): Promise<Vehicle[]>;
  findVehiclesUser(user_id: string): Promise<Vehicle[]>;
  deleteVehicle(id: string): Promise<void>;
  save(vehicle: Vehicle): Promise<Vehicle>;

  filterVehicles(
    name?: string,
    plate?: string,
    year?: number,
    color?: string,
    price?: number,
  ): Promise<Vehicle[]>;
}

export { IVehiclesRepository };
