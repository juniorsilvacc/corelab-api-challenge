import { Error } from '../../../../config/errors/error';
import { VehicleRepositoryInMemory } from '../../repositories/in-memory/in-memory-vehicle';
import { AllVehiclesService } from '../all-vehicles-service';
import { CreateVehicleService } from '../create-vehicle-service';

let vehicleRepositoryInMemory: VehicleRepositoryInMemory;
let allVehicle: AllVehiclesService;

describe('All Vehicle', () => {
  beforeEach(() => {
    vehicleRepositoryInMemory = new VehicleRepositoryInMemory();
    createVehicle = new CreateVehicleService(vehicleRepositoryInMemory);
  });
});
