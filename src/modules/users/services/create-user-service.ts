import { Error } from '../../../config/errors/Error';
import { IBcryptHashProvider } from '../../../shared/providers/bcrypt/bcrypt-provider';
import { ICreateUserDTO } from '../dtos/create-user-dto';
import { IUsersRepository } from '../repositories/users-repository';

class CreateUserService {
  constructor(
    private readonly usersRepository: IUsersRepository,
    private readonly bcryptHashProvider: IBcryptHashProvider,
  ) {}

  async execute({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (user) {
      throw new Error('User already exists');
    }

    const hashPassword = await this.bcryptHashProvider.generateHash(password);

    await this.usersRepository.create({
      name,
      email,
      password: hashPassword,
    });
  }
}

export { CreateUserService };
