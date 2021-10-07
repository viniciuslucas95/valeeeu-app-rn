import { AxiosConfig, HttpServerConfig } from '../../../configs';
import axios from 'axios';
import { IAccountDto, ITokensDto } from '../../dtos';

export class AuthApiService {
  getTokensAsync(data: IAccountDto) {
    const { email, password } = data;
    return axios.get(
      `${HttpServerConfig.httpServerUrl}/auth?email=${email}&password=${password}`,
      AxiosConfig.config
    );
  }

  refreshAccessTokenAsync(refreshToken: string) {
    return axios.get(
      `${HttpServerConfig.httpServerUrl}/auth/refresh/${refreshToken}`,
      AxiosConfig.config
    );
  }

  verifyTokensAsync(data: ITokensDto) {
    const { accessToken, refreshToken } = data;
    return axios.get(
      `${HttpServerConfig.httpServerUrl}/auth/verify?access-token=${accessToken}&refresh-token=${refreshToken}`,
      AxiosConfig.config
    );
  }
}
