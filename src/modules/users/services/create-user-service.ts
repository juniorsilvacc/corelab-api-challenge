import { Error } from '../../../config/errors/error';
import { IBcryptHashProvider } from '../../../shared/providers/bcrypt/bcrypt-provider';
import { ICreateUserDTO } from '../dtos/create-user-dto';
import { User } from '../models/user-model';
import { IUsersRepository } from '../repositories/users-repository';

class CreateUserService {
  constructor(
    private readonly usersRepository: IUsersRepository,
    private readonly bcryptHashProvider: IBcryptHashProvider,
  ) {}

  async execute({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = await this.usersRepository.findByEmail(email);

    if (user) {
      throw new Error('User already exists');
    }

    const hashPassword = await this.bcryptHashProvider.generateHash(password);

    const create = await this.usersRepository.create({
      name,
      email,
      password: hashPassword,
    });

    return create;
  }
}

export { CreateUserService };
