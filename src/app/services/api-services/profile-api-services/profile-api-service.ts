import { IFilterDto, IOrderByDto, ISmallProfileDto } from '../../../dtos';

export interface IQuery {
  offset: number;
  tag: string;
  filter?: IFilterDto;
  orderBy?: IOrderByDto;
}

export interface IProfileApiService {
  url: string;
  getSmallAsync(query: IQuery): Promise<ISmallProfileDto>;
}
