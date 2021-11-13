import { IAreaTagDto } from '../../../dtos';

export interface ITagApiService {
  url: string;
  getTagsAsync(tagFilter?: IAreaTagDto): Promise<string[]>;
}
