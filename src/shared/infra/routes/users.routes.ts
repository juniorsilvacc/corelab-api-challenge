import { Router } from 'express';
import { AuthenticatedUserController } from '../../../modules/users/controllers/authenticated-user-controller';
import { CreateUserController } from '../../../modules/users/controllers/create-user-controller';

const usersRouter = Router();

const createUserController = new CreateUserController();
const authenticatedUserController = new AuthenticatedUserController();

usersRouter.post('/register', createUserController.handle);
usersRouter.post('/login', authenticatedUserController.handle);

export { usersRouter };
