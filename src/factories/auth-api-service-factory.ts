import { FakeAuthApiService } from '../app/services/apis/auth-apis-services';

export class AuthApiServiceFactory {
  static create() {
    return new FakeAuthApiService();
  }
}
