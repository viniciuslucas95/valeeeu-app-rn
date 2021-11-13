import { FakeTagApiService } from '../services';

export class TagApiServiceFactory {
  static create() {
    return new FakeTagApiService('');
  }
}
