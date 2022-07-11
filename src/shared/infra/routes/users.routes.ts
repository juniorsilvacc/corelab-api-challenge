import { Router } from 'express';
import { AuthenticatedUserController } from '../../../modules/users/controllers/authenticated-user-controller';
import { CreateUserController } from '../../../modules/users/controllers/create-user-controller';
import { DetailsUserController } from '../../../modules/users/controllers/details-user-controller';
import ensure from '../middlewares/ensure';

const usersRouter = Router();

const createUserController = new CreateUserController();
const authenticatedUserController = new AuthenticatedUserController();
const detailsUserController = new DetailsUserController();

usersRouter.post('/register', createUserController.handle);
usersRouter.post('/login', authenticatedUserController.handle);
usersRouter.get('/details', ensure, detailsUserController.handle);

export { usersRouter };
