import { IAreaTagDto } from './tags';

export interface IFilterDto {
  areaTag: IAreaTagDto;
  maxDistance?: number;
  minRating?: number;
  maxPrice?: number;
  onlineOnly?: boolean;
}
