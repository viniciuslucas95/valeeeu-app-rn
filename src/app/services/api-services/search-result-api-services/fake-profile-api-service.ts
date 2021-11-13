import { name, lorem, internet, datatype } from 'faker';
import { Buffer } from 'buffer';
import axios from 'axios';

import { IQuery, IProfileApiService } from './profile-api-service';
import { ISmallProfileDto } from '../../../dtos';

const pictureApiUrl = 'https://picsum.photos/150/150';
const fakeFetchDelay = 0;

async function getSmallProfileAsync(): Promise<ISmallProfileDto> {
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

export class FakeProfileApiService implements IProfileApiService {
  constructor(readonly url: string) {}

  async getSmallAsync(query: IQuery): Promise<ISmallProfileDto> {
    return await new Promise(async (resolve) => {
      const result = await getSmallProfileAsync();
      setTimeout(resolve, fakeFetchDelay, result);
    });
  }
}
