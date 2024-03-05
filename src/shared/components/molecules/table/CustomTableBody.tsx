import TableBody from '@mui/material/TableBody';

import CustomTableRow from '~shared/components/molecules/table/CustomTableRow.tsx';
import TableEmptyRows from '~shared/components/molecules/table/TableEmptyRows.tsx';
import TableNoData from '~shared/components/molecules/table/TableNoData.tsx';
import { TableColumn, TableItem } from '~shared/types/table.ts';

// ----------------------------------------------------------------------

type Props<T> = {
  order?: 'desc' | 'asc';
  orderBy?: string;
  rowCount?: number;
  numSelected?: number;
  onRequestSort?: (event: React.SyntheticEvent, property: string) => void;

  selectedItemIds?: string[];
  onRowSelectChange?: (event: React.ChangeEvent<HTMLInputElement>, rowData: T) => void;
  selectable?: boolean;

  filterName?: string;
  emptyRows?: number;
  columns: TableColumn<T>[];
  data: T[];
};

const CustomTableBody = <T extends TableItem>({
  selectedItemIds = [],
  onRowSelectChange,
  selectable = false,
  emptyRows = 0,
  filterName = '',
  columns,
  data,
}: Props<T>) => {
  return (
    <TableBody>
      {data.map((rowData, index) => (
        <CustomTableRow
          key={rowData.id}
          index={index}
          columns={columns}
          rowData={rowData}
          selected={selectedItemIds?.includes(rowData.id)}
          onChange={onRowSelectChange}
          selectable={selectable}
        />
      ))}

      <TableEmptyRows height={77} emptyRows={emptyRows} />
      {data?.length === 0 && <TableNoData query={filterName} />}
    </TableBody>
  );
};

export default CustomTableBody;
