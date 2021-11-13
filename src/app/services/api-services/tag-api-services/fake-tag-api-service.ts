import { ITagApiService } from './tag-api-service';
import { name } from 'faker';
import { IAreaTagDto } from '../../../dtos';

const fakeFetchDelay = 500;

export class FakeTagApiService implements ITagApiService {
  constructor(readonly url: string) {}

  async getTagsAsync(tagFilter?: IAreaTagDto): Promise<string[]> {
    return await new Promise(async (resolve) => {
      const results: string[] = [];
      for (let i = 0; i < 1000; i++) {
        const title = name.title();
        if (!results.includes(title)) results.push(name.title());
      }
      setTimeout(resolve, fakeFetchDelay, results);
    });
  }
}
