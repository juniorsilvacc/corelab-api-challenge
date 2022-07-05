import { ICreateUserDTO } from '../dtos/create-user-dto';
import { User } from '../models/user-model';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
}

export { IUsersRepository };
