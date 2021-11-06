import { IAccountDto } from '../../../dtos';
import { IAccountApiService } from './account-api-service';

export class FakeAccountApiService implements IAccountApiService {
  async getMeAsync(accessToken: string): Promise<IAccountDto | undefined> {
    return {
      email: 'test@gmail.com',
      id: '123456',
      phone: 21987654321,
      username: 'test.digdin',
    };
  }
}
