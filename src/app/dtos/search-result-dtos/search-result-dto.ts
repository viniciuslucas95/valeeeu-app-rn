import { ISearchResultItemDto } from './search-result-item-dto';

export interface ISearchResultDto {
  results: ISearchResultItemDto[];
  totalResults: number;
}
