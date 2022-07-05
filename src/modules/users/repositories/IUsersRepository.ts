import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../models/User';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
}

export { IUsersRepository };
