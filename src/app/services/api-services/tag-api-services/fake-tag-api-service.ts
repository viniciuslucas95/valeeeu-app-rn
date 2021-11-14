import { name, datatype } from 'faker';

import { IAreaTagDto, ITagDto } from '../../../dtos';
import { ITagApiService } from './tag-api-service';

const fakeFetchDelay = 500;

export class FakeTagApiService implements ITagApiService {
  constructor(readonly url: string) {}

  async getTagsAsync(tagFilter?: IAreaTagDto): Promise<ITagDto[]> {
    return await new Promise(async (resolve) => {
      const results: ITagDto[] = [];
      for (let i = 0; i < 1000; i++) {
        const title = name.title();
        const duplicatedTitle = results.filter(
          (result) => result.tag === title
        );
        if (duplicatedTitle.length === 0)
          results.push({
            tag: title,
            quantity: Math.random() * 1000,
            id: datatype.uuid(),
          });
      }
      setTimeout(resolve, fakeFetchDelay, results);
    });
  }
}
