import { Router } from 'express';
import { AllVehiclesController } from '../../../modules/vehicle/controllers/all-vehicles-controller';
import { CreateVehicleController } from '../../../modules/vehicle/controllers/create-vehicle-controller';
import { DeleteVehicleController } from '../../../modules/vehicle/controllers/delete-vehicle-controller';
import { GetVehiclesUserController } from '../../../modules/vehicle/controllers/get-veihcles-user-controller';
import ensure from '../middlewares/ensure';

const vehiclesRouter = Router();

const createVehicleController = new CreateVehicleController();
const allVehiclesController = new AllVehiclesController();
const getVehiclesUserController = new GetVehiclesUserController();
const deleteVehicleController = new DeleteVehicleController();

vehiclesRouter.post('/create', ensure, createVehicleController.handle);
vehiclesRouter.get('/all', allVehiclesController.handle);
vehiclesRouter.get('/get', ensure, getVehiclesUserController.handle);
vehiclesRouter.delete('/remove/:id', ensure, deleteVehicleController.handle);

export { vehiclesRouter };
