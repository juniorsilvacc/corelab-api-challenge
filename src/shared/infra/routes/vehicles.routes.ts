import { Router } from 'express';
import { AllVehiclesController } from '../../../modules/vehicle/controllers/all-vehicles-controller';
import { CreateVehicleController } from '../../../modules/vehicle/controllers/create-vehicle-controller';
import { DeleteVehicleController } from '../../../modules/vehicle/controllers/delete-vehicle-controller';
import { FavoriteVehicleController } from '../../../modules/vehicle/controllers/favorite-vehicle-controller';
import { FilterVehiclesController } from '../../../modules/vehicle/controllers/filter-vehicles-controller';
import { GetVehiclesUserController } from '../../../modules/vehicle/controllers/get-veihcles-user-controller';
import { NoFavoriteVehicleController } from '../../../modules/vehicle/controllers/no-favorite-vehicle-controller';
import { UpdateVehicleController } from '../../../modules/vehicle/controllers/update-vehicle-controller';
import ensure from '../middlewares/ensure';

const vehiclesRouter = Router();

const createVehicleController = new CreateVehicleController();
const allVehiclesController = new AllVehiclesController();
const getVehiclesUserController = new GetVehiclesUserController();
const deleteVehicleController = new DeleteVehicleController();
const favoriteVehicleController = new FavoriteVehicleController();
const noFavoriteVehicleController = new NoFavoriteVehicleController();
const updateVehicleController = new UpdateVehicleController();
const filterVehiclesController = new FilterVehiclesController();

vehiclesRouter.post('/create', ensure, createVehicleController.handle);
vehiclesRouter.get('/all', allVehiclesController.handle);
vehiclesRouter.get('/get', ensure, getVehiclesUserController.handle);
vehiclesRouter.delete('/remove/:id', ensure, deleteVehicleController.handle);
vehiclesRouter.put('/favorite/:id', ensure, favoriteVehicleController.handle);
vehiclesRouter.put(
  '/nofavorite/:id',
  ensure,
  noFavoriteVehicleController.handle,
);

vehiclesRouter.patch('/update/:id', ensure, updateVehicleController.handle);

vehiclesRouter.get('/filter', filterVehiclesController.handle);

export { vehiclesRouter };
