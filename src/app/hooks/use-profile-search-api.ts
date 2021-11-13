import { useEffect, useState } from 'react';

import {
  IAreaTagDto,
  IFilterDto,
  IOrderByDto,
  ISmallProfileDto,
} from '../dtos';
import { ProfileApiServiceFactory } from '../factories';

interface IProps {
  tag?: IAreaTagDto;
  filter?: IFilterDto;
  orderBy?: IOrderByDto;
  index: number;
}

const profileApiService = ProfileApiServiceFactory.create();

export function useProfileSearchApi({ index, tag, filter, orderBy }: IProps) {
  const [result, setResult] = useState<ISmallProfileDto>();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!error) return;
    setError(false);
    fetchProfileAsync();
  }, [error]);

  useEffect(() => {
    fetchProfileAsync();
  }, []);

  async function fetchProfileAsync() {
    try {
      const result = await profileApiService.getSmallAsync({
        offset: index,
      });
      setResult(result);
    } catch (_) {
      setError(true);
    }
  }

  return { result, error };
}
