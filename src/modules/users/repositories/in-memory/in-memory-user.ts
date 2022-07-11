import { ICreateUserDTO } from '../../../users/dtos/create-user-dto';
import { User } from '../../../users/models/user-model';
import { IUsersRepository } from '../users-repository';

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { name, email, password });

    this.users.push(user);

    return user;
  }

  async findById(id: string): Promise<any> {
    const user = this.users.find(user => user.id === id);

    return user;
  }

  async findByEmail(email: string): Promise<any> {
    const user = this.users.find(user => user.email === email);

    return user;
  }
}

export { UsersRepositoryInMemory };
