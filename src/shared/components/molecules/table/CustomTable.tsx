import { CheckboxProps } from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

import CustomTableBody from './CustomTableBody';
import CustomTableHead from './CustomTableHead';

import { ITableColumn, ITableItem, TSortOrder } from '~shared';

type Props<T> = {
  sortOrder?: TSortOrder;
  sortBy?: string;
  rowCount?: number;
  onRequestSort?: (event: React.SyntheticEvent, property: string) => void;
  onSort?: (event: React.SyntheticEvent, property: keyof T) => void;

  selectable?: boolean;
  selectedItemIds?: string[];
  isSelectedAll?: boolean;
  onRowSelectChange?: (event: React.ChangeEvent<HTMLInputElement>, rowData: T) => void;
  onSelectAllChange?: CheckboxProps['onChange'];

  filterName?: string;
  emptyRows?: number;
  columns: ITableColumn<T>[];
  data: T[];
};

const CustomTable = <T extends ITableItem>({
  columns,
  data,
  emptyRows = 0,
  filterName = '',

  selectable = false,
  selectedItemIds = [],
  isSelectedAll = false,
  onRowSelectChange,
  onSelectAllChange,

  sortOrder,
  sortBy,
  onSort,
}: Props<T>) => {
  return (
    <TableContainer sx={{ overflow: 'unset' }}>
      <Table sx={{ minWidth: 800 }}>
        <CustomTableHead
          columns={columns}
          selectable={selectable}
          sortOrder={sortOrder}
          sortBy={sortBy}
          selectedItemIds={selectedItemIds}
          isSelectedAll={isSelectedAll}
          onSort={onSort}
          onSelectAllChange={onSelectAllChange}
        />
        <CustomTableBody
          data={data}
          columns={columns}
          filterName={filterName}
          emptyRows={emptyRows}
          selectedItemIds={selectedItemIds}
          onRowSelectChange={onRowSelectChange}
          selectable={selectable}
        />
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
