import { AxiosConfig, HttpServerConfig } from '../../../configs';
import axios from 'axios';

interface IAccount {
  email: string;
  password: string;
}

export class AccountApiService {
  createAsync(data: IAccount) {
    return axios.post(
      `${HttpServerConfig.httpServerUrl}/users`,
      data,
      AxiosConfig.config
    );
  }

  updateAsync(data: IAccount, accessToken: string) {
    return axios.patch(
      `${HttpServerConfig.httpServerUrl}/${accessToken}`,
      data,
      AxiosConfig.config
    );
  }

  deleteAsync(accessToken: string) {
    return axios.delete(
      `${HttpServerConfig.httpServerUrl}/${accessToken}`,
      AxiosConfig.config
    );
  }
}
