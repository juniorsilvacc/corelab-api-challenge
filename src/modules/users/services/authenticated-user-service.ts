import { IBcryptHashProvider } from '../../../shared/providers/bcrypt/bcrypt-provider';
import { IUsersRepository } from '../repositories/users-repository';
import { sign } from 'jsonwebtoken';
import { Error } from '../../../config/errors/error';
import auth from '../../../config/auth';

interface IRequest {
  email: string;
  password: string;
}

class AuthenticatedUserService {
  constructor(
    private readonly usersRepository: IUsersRepository,
    private readonly bcryptHashProvider: IBcryptHashProvider,
  ) {}

  async execute({ email, password }: IRequest) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error('User or password incorrect');
    }

    const passwordMatch = await this.bcryptHashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatch) {
      throw new Error('User or password incorrect');
    }

    // Gerar jwt token
    const token = sign({}, auth.jwt.secret, {
      subject: user.id,
      expiresIn: auth.jwt.expiresIn,
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    };
  }
}

export { AuthenticatedUserService };
