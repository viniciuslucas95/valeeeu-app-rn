import { useEffect, useRef, useState } from 'react';

import { IAreaTagDto, ITagDto } from '../dtos';
import { TagApiServiceFactory } from '../factories';

const tagApiService = TagApiServiceFactory.create();

export function useTagApi(tagFilter?: IAreaTagDto) {
  const [results, setResults] = useState<ITagDto[]>([]);
  const [error, setError] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    if (!error) return;
    setError(false);
    fetchTagsAsync();
  }, [error]);

  useEffect(() => {
    fetchTagsAsync();
  }, [tagFilter]);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  async function fetchTagsAsync() {
    try {
      const results = await tagApiService.getTagsAsync(tagFilter);
      if (!mountedRef.current) return;
      setResults(results);
    } catch (_) {
      if (!mountedRef.current) return;
      setError(true);
    }
  }

  return { results, error };
}
