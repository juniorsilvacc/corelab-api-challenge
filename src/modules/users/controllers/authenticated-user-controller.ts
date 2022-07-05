import { Request, Response } from 'express';
import { BcryptHashProvider } from '../../../shared/providers/bcrypt/implementations/bcrypt-provider-implementations';
import { UsersRepository } from '../repositories/implementations/users-implementations';
import { AuthenticatedUserService } from '../services/authenticated-user-service';

class AuthenticatedUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const usersRepository = new UsersRepository();
    const bcryptHashProvider = new BcryptHashProvider();
    const authenticatedUserService = new AuthenticatedUserService(
      usersRepository,
      bcryptHashProvider,
    );

    const user = await authenticatedUserService.execute({
      email,
      password,
    });

    return response.status(200).json(user);
  }
}

export { AuthenticatedUserController };
