import { name, lorem, internet, datatype } from 'faker';
import { Buffer } from 'buffer';
import axios from 'axios';

import { IQuery, IReadSearchResultApiService } from './read-search-result-api';
import { ISearchResultDto, ISearchResultItemDto } from '../../../dtos';

const pictureApiUrl = 'https://picsum.photos/150/150';
const fakeFetchDelay = 0;

async function getSearchResultItemAsync(): Promise<ISearchResultItemDto> {
  const { data: imageData } = await axios.get(pictureApiUrl, {
    responseType: 'arraybuffer',
  });
  const picture = Buffer.from(imageData, 'binary').toString('base64');

  return {
    id: datatype.uuid(),
    name: name.findName(),
    description: lorem.paragraph(),
    distance: Math.random() * 1000,
    lowestPrice: Math.random() * 100,
    picture,
    rating: {
      average: Math.random() * 4 + 1,
      total: Math.random() * 100,
    },
    username: internet.userName(),
  };
}

export class FakeSearchResultApiService implements IReadSearchResultApiService {
  constructor(readonly url: string) {}

  async getAsync(query: IQuery): Promise<ISearchResultDto> {
    const { range, filter, orderBy, tag } = query;

    return await new Promise(async (resolve) => {
      const rangeQuantity = range.to - range.from;
      const quantity = rangeQuantity > 0 ? rangeQuantity : 1;
      const data: ISearchResultItemDto[] = [];
      for (let i = 0; i < quantity; i++) {
        data.push(await getSearchResultItemAsync());
      }
      const result: ISearchResultDto = {
        dataRetrieved: data,
        totalResults: Math.random() * 50000,
      };
      setTimeout(resolve, fakeFetchDelay, result);
    });
  }
}
