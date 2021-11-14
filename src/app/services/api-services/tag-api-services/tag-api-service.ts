import { IAreaTagDto, ITagDto } from '../../../dtos';

export interface ITagApiService {
  url: string;
  getTagsAsync(tagFilter?: IAreaTagDto): Promise<ITagDto[]>;
}
