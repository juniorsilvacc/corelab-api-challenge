import { Repository } from 'typeorm';
import { dataSource } from '../../../../shared/connection/typeorm';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../models/User';

import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({ name, email, password });

    await this.repository.save(user);
  }
}

export { UsersRepository };
