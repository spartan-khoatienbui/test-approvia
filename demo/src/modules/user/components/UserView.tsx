import { useMemo, useState } from 'react';
import { OutlinedInputProps } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TablePagination from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';

import { USER_VIEW_TABLE_COLUMNS } from '../constants';

import { UserTableToolbar } from './molecules';

import { DEFAULT_ROW_PER_PAGES, IUser, users } from '~configs';
import {
  Iconify,
  Scrollbar,
  Table,
  useTablePagination,
  useTableSelection,
  useTableSort,
} from '~shared';
import { applyFilter, emptyRows, getComparator } from '~utils';

// ----------------------------------------------------------------------

export default function UserPage() {
  const [filterName, setFilterName] = useState('');

  const { page, rowsPerPage, handleChangeRowsPerPage, handleChangePage, toFirstPage } =
    useTablePagination();
  const { sortBy, sortOrder, onSort } = useTableSort<IUser>();

  const handleFilterByName: OutlinedInputProps['onChange'] = (event) => {
    toFirstPage();
    setFilterName(event.target.value);
  };

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
          rowsPerPageOptions={DEFAULT_ROW_PER_PAGES}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}
