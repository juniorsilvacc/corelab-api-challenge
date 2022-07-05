import { Error } from '../../../../config/errors/error';
import { BcryptHashProviderInMemory } from '../../../../shared/providers/bcrypt/in-memory/bcrypt-provider-in-memory';
import { UsersRepositoryInMemory } from '../../repositories/in-memory/in-memory-user';
import { AuthenticatedUserService } from '../authenticated-user-service';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let hashProviderInMemory: BcryptHashProviderInMemory;
let authenticated: AuthenticatedUserService;

describe('Authenticated User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    hashProviderInMemory = new BcryptHashProviderInMemory();
    authenticated = new AuthenticatedUserService(
      usersRepositoryInMemory,
      hashProviderInMemory,
    );
  });

  it('should be able to authenticated', async () => {
    const user = await usersRepositoryInMemory.create({
      name: 'Test User',
      email: 'teste@teste.com',
      password: '123456',
    });

    const response = await authenticated.execute({
      email: 'teste@teste.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.name).toEqual(user.name);
    expect(response.email).toEqual(user.email);
  });

  it('should not be able to authenticate with non existent user', async () => {
    expect(
      authenticated.execute({
        email: 'teste@teste.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should not be able to authenticate with wrong password', async () => {
    await usersRepositoryInMemory.create({
      name: 'Test User',
      email: 'teste@teste.com',
      password: '123456',
    });

    expect(
      authenticated.execute({
        email: 'teste@error.com',
        password: 'error',
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
