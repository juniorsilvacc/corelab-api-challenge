import { Repository } from 'typeorm';
import { dataSource } from '../../../../shared/infra/connection/typeorm';
import { ICreateUserDTO } from '../../dtos/create-user-dto';
import { User } from '../../models/user-model';
import { IUsersRepository } from '../users-repository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.repository.findOneBy({ id });

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.repository.findOneBy({ email });

    return user;
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({ name, email, password });

    await this.repository.save(user);
  }
}

export { UsersRepository };
