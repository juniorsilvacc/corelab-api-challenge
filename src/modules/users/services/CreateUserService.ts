import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { IUsersRepository } from '../repositories/IUsersRepository';

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, email, password }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      name,
      email,
      password,
    });
  }
}

export { CreateUserService };
