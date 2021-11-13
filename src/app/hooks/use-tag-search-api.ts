import { useEffect, useState } from 'react';
import { IAreaTagDto } from '../dtos';
import { TagApiServiceFactory } from '../factories';

const tagApiService = TagApiServiceFactory.create();

export function useTagSearchApi(tagFilter?: IAreaTagDto) {
  const [results, setResults] = useState<string[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!error) return;
    setError(false);
    fetchTagsAsync();
  }, [error]);

  useEffect(() => {
    fetchTagsAsync();
  }, [tagFilter]);

  async function fetchTagsAsync() {
    try {
      const results = await tagApiService.getTagsAsync(tagFilter);
      setResults(results);
    } catch (_) {
      setError(true);
    }
  }

  return { results, error };
}
