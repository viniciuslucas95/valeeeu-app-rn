import { Filter } from '../types';

export interface IOrderByDto {
  filter: Filter;
  descending?: boolean;
}
