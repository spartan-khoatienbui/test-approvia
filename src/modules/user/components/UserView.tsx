import { useMemo, useState } from 'react';
import { OutlinedInputProps } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TablePagination, { TablePaginationOwnProps } from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';

import { USER_VIEW_TABLE_COLUMNS } from '../constants';

import { UserTableToolbar } from './molecules';

import { IUser, users } from '~configs';
import { Iconify, Scrollbar, Table, useTableSelection, useTableSort } from '~shared';
import { applyFilter, emptyRows, getComparator } from '~utils';

// ----------------------------------------------------------------------

export default function UserPage() {
  const [page, setPage] = useState(0);

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage: TablePaginationOwnProps['onPageChange'] = (event, newPage) => {
    event?.stopPropagation();
    event?.preventDefault();
    setPage(newPage);
  };

  const handleChangeRowsPerPage: TablePaginationOwnProps['onRowsPerPageChange'] = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName: OutlinedInputProps['onChange'] = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const { sortBy, sortOrder, onSort } = useTableSort<IUser>();

  const dataFiltered = useMemo(
    () =>
      applyFilter<IUser>({
        inputData: users,
        comparator: getComparator<IUser>(sortOrder || 'desc', sortBy),
        filterName,
      }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [filterName, sortOrder, sortBy, page, rowsPerPage]
  );

  const { onRowSelectChange, isSelectedAll, onSelectAllChange, selectedItemIds } =
    useTableSelection<IUser>(dataFiltered);

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Users</Typography>

        <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New User
        </Button>
      </Stack>

      <Card>
        <UserTableToolbar
          numSelected={selectedItemIds.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <Table
            columns={USER_VIEW_TABLE_COLUMNS}
            data={dataFiltered}
            emptyRows={emptyRows(page, rowsPerPage, users.length)}
            onSort={onSort}
            sortBy={sortBy}
            sortOrder={sortOrder}
            isSelectedAll={isSelectedAll}
            selectedItemIds={selectedItemIds}
            onRowSelectChange={onRowSelectChange}
            onSelectAllChange={onSelectAllChange}
            selectable
          />
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
