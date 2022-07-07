import { Request, Response } from 'express';
import { UsersRepository } from '../repositories/implementations/users-implementations';
import { DetailsUserService } from '../services/details-user-service';
import { instanceToInstance } from 'class-transformer';

class DetailsUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const usersRepository = new UsersRepository();
    const detailsUserService = new DetailsUserService(usersRepository);

    const user = await detailsUserService.execute({
      user_id,
    });

    return response.status(200).json(instanceToInstance(user));
  }
}

export { DetailsUserController };
