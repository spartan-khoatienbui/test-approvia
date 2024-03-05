import { useCallback, useState } from 'react';

import { SortOrder } from '~shared/types/table.ts';
import { nextSortOrder } from '~utils';

const useTableSort = <T extends { name: string }>() => {
  const [sortOrder, setSortOrder] = useState<SortOrder>();
  const [sortBy, setSortBy] = useState<keyof T>('name');

  const onSort = useCallback((event: React.SyntheticEvent, updateSortBy: keyof T) => {
    event?.stopPropagation();
    setSortBy((prevSortBy) => {
      if (prevSortBy === updateSortBy) {
        setSortOrder((prevSortOrder) => nextSortOrder(prevSortOrder));
        return prevSortBy;
      } else {
        setSortOrder(nextSortOrder());
        return updateSortBy;
      }
    });
  }, []);

  return {
    onSort,
    sortOrder,
    sortBy,
  };
};

export default useTableSort;
