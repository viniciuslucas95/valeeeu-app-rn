import { IAccountCredentialsDto } from '../../../dtos';

export interface IAuthenticationResult {
  accessToken: string;
  refreshToken: string;
}

export interface IAccessTokenGenerationResult {
  accessToken: string;
}

export interface IAuthApiService {
  authenticateAsync(
    credentials: IAccountCredentialsDto
  ): Promise<IAuthenticationResult | undefined>;
  validateAccessTokenAsync(accessToken: string): Promise<boolean>;
  generateNewAccessTokenAsync(
    refreshToken: string
  ): Promise<IAccessTokenGenerationResult | undefined>;
}
