import { UsersRepositoryInMemory } from '../../repositories/in-memory/in-memory-user';
import { DetailsUserService } from '../details-user-service';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let detailsUserService: DetailsUserService;

describe('Details User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    detailsUserService = new DetailsUserService(usersRepositoryInMemory);
  });

  it('should be able to details user', async () => {
    const user = await usersRepositoryInMemory.create({
      name: 'Test User',
      email: 'teste@teste.com',
      password: '123456',
    });

    const details = await detailsUserService.execute({
      user_id: user.id,
    });

    expect(details).toBe(user);
  });
});
