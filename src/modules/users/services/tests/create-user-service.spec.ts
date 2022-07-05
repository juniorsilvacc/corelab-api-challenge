import { Error } from '../../../../config/errors/error';
import { BcryptHashProviderInMemory } from '../../../../shared/providers/bcrypt/in-memory/bcrypt-provider-in-memory';
import { UsersRepositoryInMemory } from '../../repositories/in-memory/in-memory-user';
import { CreateUserService } from '../create-user-service';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let hashProviderInMemory: BcryptHashProviderInMemory;
let createUser: CreateUserService;

describe('Create User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    hashProviderInMemory = new BcryptHashProviderInMemory();
    createUser = new CreateUserService(
      usersRepositoryInMemory,
      hashProviderInMemory,
    );
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'Test User',
      email: 'teste@teste.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('shold not be able to create a new user with the same email', async () => {
    await createUser.execute({
      name: 'Test User',
      email: 'teste@teste.com',
      password: '123456',
    });

    expect(
      createUser.execute({
        name: 'Test User',
        email: 'teste@teste.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
