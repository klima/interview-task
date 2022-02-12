import { useState, useEffect } from 'react';
import { getComments, IComment } from './services/api/api';

const useTable = <T>(initialItems: T[]) => {
  const [items, setItems] = useState(initialItems);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchComments(page: number = 1) {
      const newComments: T[] = await getComments(page);

      setItems(items => [...items, ...newComments]);
    }

    page > items.length / 10 && fetchComments(page);
  }, [items.length, page]);

  return [items, page, setPage] as const;
};

export default useTable;
