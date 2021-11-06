import { FakeAuthApiService } from '../services/apis/auth-api-services';

export class AuthApiServiceFactory {
  static create() {
    return new FakeAuthApiService();
  }
}
