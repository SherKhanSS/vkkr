import { useState } from 'react';
import { UsePaginationProps } from './types';
import { LIMIT } from '../../constants';
import { DocumentNode } from '@apollo/client';
import { useQuery } from '@apollo/client';

const initialTotal = 1;

export const usePagination = (
  query: DocumentNode,
  variables: {
    start: number;
    limit: number;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): UsePaginationProps<any> => {
  const [activePage, setActivePage] = useState(initialTotal);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [loadedData, setLoadedData] = useState<null | any>(null);
  const { data, fetchMore } = useQuery(query, {
    variables,
    notifyOnNetworkStatusChange: true,
  });

  const getDataFromGql = async (count: number) => {
    if (activePage === count) {
      return;
    }
    setActivePage(count);
    const response = await fetchMore({
      variables: {
        start: LIMIT * (count - 1),
        limit: LIMIT,
      },
    });
    setLoadedData(response.data);
  };

  const actualData = loadedData || data;

  return { activePage, setActivePage, actualData, getDataFromGql };
};
