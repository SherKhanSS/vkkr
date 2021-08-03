export type UsePaginationProps<T> = {
  activePage: number;
  setActivePage: (total: number) => void;
  actualData: T;
  getDataFromGql: (count: number) => void;
};

export type PaginationProps = {
  activePage: number;
  setActivePage: (total: number) => void;
  totalItemsCount: number;
  itemsCount?: number;
};
