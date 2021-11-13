import { FakeProfileApiService } from '../services';

export class ProfileApiServiceFactory {
  static create() {
    return new FakeProfileApiService('');
  }
}
