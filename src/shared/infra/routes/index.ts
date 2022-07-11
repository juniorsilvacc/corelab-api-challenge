import { Router } from 'express';
import { usersRouter } from './users.routes';
import { vehiclesRouter } from './vehicles.routes';

const router = Router();

router.use('/api/users', usersRouter);
router.use('/api/vehicles', vehiclesRouter);

export { router };
