import { Request, Response } from 'express';
import { BcryptHashProvider } from '../../../shared/providers/bcrypt/implementations/bcrypt-provider-implementations';
import { UsersRepository } from '../repositories/implementations/users-implementations';
import { CreateUserService } from '../services/create-user-service';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const usersRepository = new UsersRepository();
    const bcryptHashProvider = new BcryptHashProvider();
    const createUserService = new CreateUserService(
      usersRepository,
      bcryptHashProvider,
    );

    const user = await createUserService.execute({
      name,
      email,
      password,
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
