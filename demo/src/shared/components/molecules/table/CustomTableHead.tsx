import Box from '@mui/material/Box';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';

import { ITableColumn, ITableItem, TSortOrder } from '~shared';
import { visuallyHidden } from '~utils';

// ----------------------------------------------------------------------

type Props<T> = {
  sortOrder?: TSortOrder;
  sortBy?: string;
  rowCount?: number;
  numSelected?: number;
  onSort?: (event: React.SyntheticEvent, property: keyof T) => void;

  onSelectAllChange?: CheckboxProps['onChange'];
  selectable?: boolean;
  isSelectedAll?: boolean;
  selectedItemIds?: string[];

  columns: ITableColumn<T>[];
};

const CustomTableHead = <T extends ITableItem>({
  columns,
  selectable = false,
  isSelectedAll = false,
  selectedItemIds = [],

  sortOrder,
  sortBy,
  onSort,
  onSelectAllChange,
}: Props<T>) => {
  return (
    <TableHead>
      <TableRow>
        {selectable && (
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={selectedItemIds?.length > 0 && !isSelectedAll}
              checked={isSelectedAll}
              onChange={onSelectAllChange}
            />
          </TableCell>
        )}

        {columns.map((column) => (
          <TableCell
            key={column.key}
            sortDirection={sortBy === column.key ? sortOrder : false}
            {...(column.props || {})}
            {...(column.headProps || {})}
          >
            <TableSortLabel
              hideSortIcon
              active={!!sortOrder && sortBy === column.key}
              direction={sortBy === column.key ? sortOrder : 'asc'}
              onClick={(event) => onSort?.(event, column.key as keyof T)}
            >
              {column.label}
              {sortBy === column.key ? (
                <Box sx={{ ...visuallyHidden }}>
                  {sortOrder === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default CustomTableHead;
