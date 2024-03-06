import React, { useCallback, useState } from 'react';
import { TablePaginationOwnProps } from '@mui/material/TablePagination';

import { DEFAULT_ROW_PER_PAGES } from '~configs';

const useTablePagination = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROW_PER_PAGES[0]);

  const handleChangePage: TablePaginationOwnProps['onPageChange'] = useCallback(
    (event, newPage) => {
      event?.stopPropagation();
      event?.preventDefault();
      setPage(newPage);
    },
    []
  );

  const handleChangeRowsPerPage: TablePaginationOwnProps['onRowsPerPageChange'] = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setPage(0);
      setRowsPerPage(parseInt(event.target.value, 10));
    },
    []
  );

  const toFirstPage = useCallback(() => setPage(0), []);

  return {
    page,
    rowsPerPage,
    toFirstPage,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};

export default useTablePagination;
