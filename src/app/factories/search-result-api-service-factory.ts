import { FakeSearchResultApiService } from '../services';

export class SearchResultApiServiceFactory {
  static create() {
    return new FakeSearchResultApiService('');
  }
}
