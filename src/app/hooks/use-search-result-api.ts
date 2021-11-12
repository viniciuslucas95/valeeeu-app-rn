import { useEffect, useState } from 'react';

import {
  IAreaTagDto,
  IFilterDto,
  IOrderByDto,
  ISearchResultDto,
} from '../dtos';
import { SearchResultApiServiceFactory } from '../factories';

interface IProps {
  desiredQuantity: number;
  tag?: IAreaTagDto;
  filter?: IFilterDto;
  orderBy?: IOrderByDto;
}

const searchResultApiService = SearchResultApiServiceFactory.create();

export function useSearchResultApi({
  desiredQuantity,
  tag,
  filter,
  orderBy,
}: IProps) {
  const [searchResult, setSearchResult] = useState<ISearchResultDto>({
    results: [],
    totalResults: 0,
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (desiredQuantity <= searchResult.results.length) return;

    async function fetchAsync() {
      try {
        const { results, totalResults } = await searchResultApiService.getAsync(
          {
            range: {
              from: searchResult.results.length,
              to: desiredQuantity,
            },
            filter,
            orderBy,
            tag,
          }
        );
        setSearchResult({
          results: [...searchResult.results, ...results],
          totalResults,
        });
      } catch (err) {
        console.error(err);
      }
    }

    fetchAsync();
  }, [desiredQuantity]);

  return { searchResult, error };
}
