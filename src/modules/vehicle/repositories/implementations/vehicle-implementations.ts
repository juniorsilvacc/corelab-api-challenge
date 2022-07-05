import { Repository } from 'typeorm';
import { dataSource } from '../../../../shared/infra/connection/typeorm';
import { ICreateVehicleDTO } from '../../dtos/create-vehicle-dto';
import { Vehicle } from '../../models/vehicle-model';
import { IVehiclesRepository } from '../vehicle-repository';

class VehicleRepository implements IVehiclesRepository {
  private repository: Repository<Vehicle>;

  constructor() {
    this.repository = dataSource.getRepository(Vehicle);
  }

  async save(vehicle: Vehicle): Promise<Vehicle> {
    return this.repository.save(vehicle);
  }

  async deleteVehicle(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findVehiclesUser(user_id: string): Promise<Vehicle[]> {
    const vehicles = await this.repository.find({
      where: { user_id },
    });

    return vehicles;
  }

  async findAll(): Promise<Vehicle[]> {
    const vehicle = await this.repository.find();

    return vehicle;
  }

  async create({
    user_id,
    name,
    description,
    plate,
    year,
    color,
    price,
  }: ICreateVehicleDTO): Promise<void> {
    const vehicle = this.repository.create({
      user_id,
      name,
      description,
      plate,
      isFavorite: false,
      year,
      color,
      price,
    });

    await this.repository.save(vehicle);
  }

  async findById(id: string): Promise<Vehicle | null> {
    const vehicle = await this.repository.findOneBy({ id });

    return vehicle;
  }

  async findByPlate(plate: string): Promise<Vehicle | null> {
    const vehicle = await this.repository.findOneBy({ plate });

    return vehicle;
  }
}

export { VehicleRepository };
