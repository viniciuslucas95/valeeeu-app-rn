import { useEffect, useState } from 'react';

import { IFilterDto, IOrderByDto, ISmallProfileDto } from '../dtos';
import { ProfileApiServiceFactory } from '../factories';

interface IProps {
  filter?: IFilterDto;
  orderBy?: IOrderByDto;
  index: number;
  tag?: string;
}

const profileApiService = ProfileApiServiceFactory.create();

export function useProfileSearchApi({ index, filter, orderBy, tag }: IProps) {
  const [result, setResult] = useState<ISmallProfileDto>();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!error) return;
    setError(false);
    fetchProfileAsync();
  }, [error]);

  useEffect(() => {
    fetchProfileAsync();
    return () => {
      setResult(undefined);
    };
  }, [tag, filter, orderBy]);

  async function fetchProfileAsync() {
    if (!tag) return;
    try {
      const result = await profileApiService.getSmallAsync({
        offset: index,
        tag,
      });
      setResult(result);
    } catch (_) {
      setError(true);
    }
  }

  return { result, error };
}
