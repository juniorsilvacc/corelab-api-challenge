import { Router } from 'express';
import { AllVehiclesController } from '../../../modules/vehicle/controllers/all-vehicles-controller';
import { CreateVehicleController } from '../../../modules/vehicle/controllers/create-vehicle-controller';
import ensure from '../middlewares/ensure';

const vehiclesRouter = Router();

const createVehicleController = new CreateVehicleController();
const allVehiclesController = new AllVehiclesController();

vehiclesRouter.post('/create', ensure, createVehicleController.handle);
vehiclesRouter.get('/all', allVehiclesController.handle);

export { vehiclesRouter };
