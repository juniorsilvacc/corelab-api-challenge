import { Error } from '../../../config/errors/error';
import { User } from '../models/user-model';
import { IUsersRepository } from '../repositories/users-repository';

interface IRequest {
  user_id: string;
}

class DetailsUserService {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute({ user_id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}

export { DetailsUserService };
