import { IAccountDto } from '../../../dtos';

export interface IAccountApiService {
  getMeAsync(accessToken: string): Promise<IAccountDto | undefined>;
}
