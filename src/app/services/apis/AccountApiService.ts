import { AxiosConfig, HttpServerConfig } from '../../../configs';
import axios from 'axios';
import { IAccountDto } from '../../dtos';

export class AccountApiService {
  createAsync(data: IAccountDto) {
    return axios.post(
      `${HttpServerConfig.httpServerUrl}/users`,
      data,
      AxiosConfig.config
    );
  }

  updateAsync(data: IAccountDto, accessToken: string) {
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
