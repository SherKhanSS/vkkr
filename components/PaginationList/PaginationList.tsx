import { FC } from 'react';
import { Wrap } from './styled';
import Pagination from 'react-js-pagination';
import { PaginationProps } from './types';
import { LIMIT } from '../../constants';

const ITEMS_COUNT_DEFAULT = LIMIT;

export const PaginationList: FC<PaginationProps> = ({
  activePage,
  setActivePage,
  itemsCount,
  totalItemsCount,
}) => {
  const itemsCountPerPage = itemsCount ? itemsCount : ITEMS_COUNT_DEFAULT;
  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  return (
    <Wrap>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        onChange={handlePageChange}
      />
    </Wrap>
  );
};
