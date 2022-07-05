import { inject, injectable } from 'tsyringe';
import { Error } from '../../../config/errors/Error';
import { IBcryptHashProvider } from '../../../shared/providers/bcrypt/IBcryptHashProvider';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { IUsersRepository } from '../repositories/IUsersRepository';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('BcryptHashProvider')
    private bcryptHashProvider: IBcryptHashProvider,
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
