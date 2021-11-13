import { useEffect, useState } from 'react';

import {
  IAreaTagDto,
  IFilterDto,
  IOrderByDto,
  ISearchResultDto,
} from '../dtos';
import { SearchResultApiServiceFactory } from '../factories';

interface IProps {
  resultQuantity: number;
  tag?: IAreaTagDto;
  filter?: IFilterDto;
  orderBy?: IOrderByDto;
}

const searchResultApiService = SearchResultApiServiceFactory.create();

export function useSearchResultApi({
  resultQuantity,
  tag,
  filter,
  orderBy,
}: IProps) {
  const [searchResult, setResult] = useState<ISearchResultDto>({
    dataRetrieved: [],
    totalResults: 0,
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (resultQuantity <= searchResult.dataRetrieved.length) return;

    async function fetchAsync() {
      try {
        const { dataRetrieved: moreData, totalResults } =
          await searchResultApiService.getAsync({
            range: {
              from: searchResult.dataRetrieved.length,
              to: resultQuantity,
            },
            filter,
            orderBy,
            tag,
          });
        setResult({
          dataRetrieved: [...searchResult.dataRetrieved, ...moreData],
          totalResults,
        });
      } catch (err) {
        console.error(err);
      }
    }

    fetchAsync();
  }, [resultQuantity]);

  return { searchResult, error };
}
