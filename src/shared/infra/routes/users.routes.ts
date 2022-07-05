import { Router } from 'express';
import { CreateUserController } from '../../../modules/users/controllers/create-user-controller';

const usersRouter = Router();

const createUserController = new CreateUserController();

usersRouter.post('/signup', createUserController.handle);

export { usersRouter };
