import { useEffect, useRef, useState } from 'react';

import { IFilterDto, IOrderByDto, ISmallProfileDto, ITagDto } from '../dtos';
import { ProfileApiServiceFactory } from '../factories';

interface IProps {
  filter?: IFilterDto;
  orderBy?: IOrderByDto;
  index: number;
  tag?: string;
}

const profileApiService = ProfileApiServiceFactory.create();

export function useProfileApi({ index, filter, orderBy, tag }: IProps) {
  const [result, setResult] = useState<ISmallProfileDto>();
  const [error, setError] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    if (!error) return;
    setError(false);
    fetchProfileAsync();
  }, [error]);

  useEffect(() => {
    fetchProfileAsync();
  }, [tag, filter, orderBy]);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  async function fetchProfileAsync() {
    if (!tag) return;
    try {
      const result = await profileApiService.getSmallAsync({
        offset: index,
        tag,
      });
      if (!mountedRef.current) return;
      setResult(result);
    } catch (_) {
      if (!mountedRef.current) return;
      setError(true);
    }
  }

  return { result, error };
}
