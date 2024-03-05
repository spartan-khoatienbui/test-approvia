import { get } from 'react-hook-form';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { TableColumn, TableItem } from '~shared/types/table.ts';

// ----------------------------------------------------------------------

type Props<T> = {
  selected?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, rowData: T) => void;

  selectable: boolean;
  index: number;
  rowData: T;
  columns: TableColumn<T>[];
};

const CustomTableRow = <T extends TableItem>({
  columns,
  selectable,
  index,
  rowData,

  selected,
  onChange,
}: Props<T>) => {
  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        {selectable && (
          <TableCell padding="checkbox">
            <Checkbox
              disableRipple
              checked={selected}
              onChange={(event) => onChange?.(event, rowData)}
            />
          </TableCell>
        )}
        {columns.map((column) => (
          <TableCell {...(column.props || {})} {...(column.bodyProps || {})}>
            {column.itemShouldRender?.(rowData, index) || get(rowData, column.key, '')}
          </TableCell>
        ))}
      </TableRow>
    </>
  );
};

export default CustomTableRow;
