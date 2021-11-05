import { IAccountCredentials } from '../../../dtos';
import {
  IAccessTokenGenerationResult,
  IAuthApiService,
  IAuthenticationResult,
} from './auth-api-service';

export class FakeAuthApiService implements IAuthApiService {
  async authenticateAsync(
    credentials: IAccountCredentials
  ): Promise<IAuthenticationResult | undefined> {
    return {
      accessToken: '456',
      refreshToken: '789',
    };
  }

  async validateAccessTokenAsync(accessToken: string): Promise<boolean> {
    return true;
  }

  async generateNewAccessTokenAsync(
    refreshToken: string
  ): Promise<IAccessTokenGenerationResult | undefined> {
    return {
      accessToken: '987',
    };
  }
}
