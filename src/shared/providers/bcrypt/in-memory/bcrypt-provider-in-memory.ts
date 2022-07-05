import { IBcryptHashProvider } from '../bcrypt-provider';

class BcryptHashProviderInMemory implements IBcryptHashProvider {
  async generateHash(payload: string): Promise<string> {
    return payload;
  }

  async compareHash(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed;
  }
}

export { BcryptHashProviderInMemory };
