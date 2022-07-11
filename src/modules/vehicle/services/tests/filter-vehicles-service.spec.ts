import { VehicleRepositoryInMemory } from '../../repositories/in-memory/in-memory-vehicle';
import { FilterVehiclesService } from '../filter-vehicles-service';

let vehicleRepositoryInMemory: VehicleRepositoryInMemory;
let filterVehicleService: FilterVehiclesService;

describe('Filter Vehicles', () => {
  beforeEach(() => {
    vehicleRepositoryInMemory = new VehicleRepositoryInMemory();
    filterVehicleService = new FilterVehiclesService(vehicleRepositoryInMemory);
  });

  it('should be able to list vehicles', async () => {
    const vehicle = await vehicleRepositoryInMemory.create({
      user_id: '2f860026-95cf-4942-8f01-9af157986a90',
      name: 'First Vehicle',
      description: 'This is a description of first vehicle',
      plate: 'DDT-0007',
      year: 2020,
      color: '#ff00ff',
      price: 22000,
    });

    const vehicles = await filterVehicleService.execute({});

    expect(vehicles).toEqual([vehicle]);
  });

  it('should be able to list vehicle by name', async () => {
    const vehicle = await vehicleRepositoryInMemory.create({
      user_id: '2f860026-95cf-4942-8f01-9af157986a90',
      name: 'First Vehicle',
      description: 'This is a description of first vehicle',
      plate: 'DDT-0007',
      year: 2020,
      color: '#ff00ff',
      price: 22000,
    });

    const vehicles = await filterVehicleService.execute({
      name: 'First Vehicle',
    });

    expect(vehicles).toEqual([vehicle]);
  });

  it('should be able to list vehicle by plate', async () => {
    const vehicle = await vehicleRepositoryInMemory.create({
      user_id: '2f860026-95cf-4942-8f01-9af157986a90',
      name: 'First Vehicle',
      description: 'This is a description of first vehicle',
      plate: 'DDT-0007',
      year: 2020,
      color: '#ff00ff',
      price: 22000,
    });

    const vehicles = await filterVehicleService.execute({
      plate: 'DDT-0007',
    });

    expect(vehicles).toEqual([vehicle]);
  });

  it('should be able to list vehicle by year', async () => {
    const vehicle = await vehicleRepositoryInMemory.create({
      user_id: '2f860026-95cf-4942-8f01-9af157986a90',
      name: 'First Vehicle',
      description: 'This is a description of first vehicle',
      plate: 'DDT-0007',
      year: 2020,
      color: '#ff00ff',
      price: 22000,
    });

    const vehicles = await filterVehicleService.execute({
      year: 2020,
    });

    expect(vehicles).toEqual([vehicle]);
  });

  it('should be able to list vehicle by color', async () => {
    const vehicle = await vehicleRepositoryInMemory.create({
      user_id: '2f860026-95cf-4942-8f01-9af157986a90',
      name: 'First Vehicle',
      description: 'This is a description of first vehicle',
      plate: 'DDT-0007',
      year: 2020,
      color: '#ff00ff',
      price: 22000,
    });

    const vehicles = await filterVehicleService.execute({
      color: '#ff00ff',
    });

    expect(vehicles).toEqual([vehicle]);
  });

  it('should be able to list vehicle by price', async () => {
    const vehicle = await vehicleRepositoryInMemory.create({
      user_id: '2f860026-95cf-4942-8f01-9af157986a90',
      name: 'First Vehicle',
      description: 'This is a description of first vehicle',
      plate: 'DDT-0007',
      year: 2020,
      color: '#ff00ff',
      price: 22000,
    });

    const vehicles = await filterVehicleService.execute({
      price: 22000,
    });

    expect(vehicles).toEqual([vehicle]);
  });
});
