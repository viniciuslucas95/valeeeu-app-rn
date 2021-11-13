import { ISearchResultItemDto } from './search-result-item-dto';

export interface ISearchResultDto {
  dataRetrieved: ISearchResultItemDto[];
  totalResults: number;
}
