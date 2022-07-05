import { Router } from 'express';
import { CreateVehicleController } from '../../../modules/vehicle/controllers/create-vehicle-controller';
import ensure from '../middlewares/ensure';

const vehiclesRouter = Router();

const createVehicleController = new CreateVehicleController();

vehiclesRouter.post('/create', ensure, createVehicleController.handle);

export { vehiclesRouter };
