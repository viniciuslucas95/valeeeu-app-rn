import { AxiosConfig, HttpServerConfig } from '../../../configs';
import axios from 'axios';

interface IAccount {
  email: string;
  password: string;
}

interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export class AuthApiService {
  getTokensAsync(data: IAccount) {
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

  verifyTokensAsync(data: ITokens) {
    const { accessToken, refreshToken } = data;
    return axios.get(
      `${HttpServerConfig.httpServerUrl}/auth/verify?access-token=${accessToken}&refresh-token=${refreshToken}`,
      AxiosConfig.config
    );
  }
}
