import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = <T>(endpoint: string) => {
  const limitPerPage = 15;
  const [page, setPage] = useState(1);
  const [responses, setResponses] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetch(endpoint: string, page: number, limit: number) {
      try {
        setIsLoading(true);

        const { data }: { data: T[] } = await axios.get(
          `https://jsonplaceholder.typicode.com/${endpoint}?_start=${page === 1 ? '0' : (page - 1) * limit}&_limit=${limit}`,
        );

        setResponses(data);
      } catch (error) {
        console.log(error);

        setResponses([] as T[]);
      } finally {
        setIsLoading(false);
      }
    }

    fetch(endpoint, page, limitPerPage);
  }, [endpoint, limitPerPage, page]);

  return [responses, page, setPage, isLoading] as const;
};

export default useFetch;
