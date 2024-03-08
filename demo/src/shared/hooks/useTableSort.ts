import { useCallback, useState } from 'react';

import { TSortOrder } from '~shared';
import { nextSortOrder } from '~utils';

const useTableSort = <T extends { name: string }>() => {
  const [sortOrder, setSortOrder] = useState<TSortOrder>();
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
