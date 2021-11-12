import {
  IAreaTagDto,
  IFilterDto,
  IOrderByDto,
  ISearchResultDto,
} from '../../../dtos';

interface IRange {
  from: number;
  to: number;
}

export interface IQuery {
  range: IRange;
  filter?: IFilterDto;
  orderBy?: IOrderByDto;
  tag?: IAreaTagDto;
}

export interface IReadSearchResultApiService {
  url: string;
  getAsync(query: IQuery): Promise<ISearchResultDto>;
}
