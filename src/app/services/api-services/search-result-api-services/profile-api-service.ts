import {
  IAreaTagDto,
  IFilterDto,
  IOrderByDto,
  ISmallProfileDto,
} from '../../../dtos';

export interface IQuery {
  offset: number;
  filter?: IFilterDto;
  orderBy?: IOrderByDto;
  tag?: IAreaTagDto;
}

export interface IProfileApiService {
  url: string;
  getSmallAsync(query: IQuery): Promise<ISmallProfileDto>;
}
