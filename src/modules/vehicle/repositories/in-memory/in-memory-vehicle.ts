import { ICreateVehicleDTO } from '../../dtos/create-vehicle-dto';
import { Vehicle } from '../../models/vehicle-model';
import { IVehiclesRepository } from '../vehicle-repository';

class VehicleRepositoryInMemory implements IVehiclesRepository {
  vehicles: Vehicle[] = [];

  async create({
    user_id,
    name,
    description,
    plate,
    year,
    color,
    price,
  }: ICreateVehicleDTO): Promise<Vehicle> {
    const vehicle = new Vehicle();

    Object.assign(vehicle, {
      user_id,
      name,
      description,
      plate,
      year,
      color,
      price,
    });

    this.vehicles.push(vehicle);

    return vehicle;
  }

  async findById(id: string): Promise<any> {
    const vehicle = this.vehicles.find(vehicle => vehicle.id === id);

    return vehicle;
  }

  async findByPlate(plate: string): Promise<any> {
    const vehicle = this.vehicles.find(vehicle => vehicle.plate === plate);

    return vehicle;
  }

  async findAll(): Promise<Vehicle[]> {
    const vehicle = this.vehicles;

    return vehicle;
  }

  async findVehiclesUser(user_id: string): Promise<Vehicle[] | any> {
    const vehicle = this.vehicles.find(vehicle => vehicle.user_id === user_id);

    return vehicle;
  }

  async deleteVehicle(id: string): Promise<void> {
    this.vehicles.find(vehicle => vehicle.id === id);
  }

  async save(vehicle: Vehicle): Promise<Vehicle | any> {
    return vehicle;
  }

  async filterVehicles(
    name?: string | undefined,
    plate?: string | undefined,
    year?: number | undefined,
    color?: string | undefined,
    price?: number | undefined,
  ): Promise<Vehicle[]> {
    let filterVehicle = this.vehicles.filter(vehicle => vehicle.name);

    if (!name && !plate && !year && !color && !price) return filterVehicle;

    filterVehicle = filterVehicle.filter(vehicle => {
      if (vehicle.name === name) return true;
      if (vehicle.plate === plate) return true;
      if (vehicle.year === year) return true;
      if (vehicle.color === color) return true;
      if (vehicle.price === price) return true;

      return false;
    });

    return filterVehicle;
  }
}

export { VehicleRepositoryInMemory };
