import { FakeAccountApiService } from '../services/apis/account-api-services';

export class AccountApiServiceFactory {
  static create() {
    return new FakeAccountApiService();
  }
}
