import { useState, useCallback } from 'react';
import SearchService from '../services/search.service';
import useDebounce from './useDebounce';

const useSearch = ({ delay = 500 } = {}) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(async (query) => {
    if (!query || query.trim() === '') {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const data = await SearchService.searchProducts(query);
      setResults(data);
      setError(null);
    } catch (err) {
      setError(err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { results, loading, error, search };
};

export default useSearch;
