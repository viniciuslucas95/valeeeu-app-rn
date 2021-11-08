import axios from 'axios';
import { IAccountDto } from '../../../dtos';
import { IAccountApiService } from './account-api-service';
import { Buffer } from 'buffer';

export class FakeAccountApiService implements IAccountApiService {
  async getMeAsync(accessToken: string): Promise<IAccountDto | undefined> {
    try {
      const { data } = await axios.get(
        'https://conexao.segurosunimed.com.br/wp-content/uploads/2018/11/mes-homem-1.jpg',
        {
          responseType: 'arraybuffer',
        }
      );
      const image = Buffer.from(data, 'binary').toString('base64');
      return {
        email: 'test@gmail.com',
        id: '123456',
        phone: '21987654321',
        profile: {
          id: '423432',
          name: 'jorgin',
          username: 'jorgin.digdin',
          picture: {
            id: '321',
            picture: image,
          },
        },
      };
    } catch (err) {
      console.error(err);
    }
  }
}
