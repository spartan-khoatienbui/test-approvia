import { ReactNode } from 'react';
import { TableCellProps } from '@mui/material/TableCell';

export type SortOrder = 'desc' | 'asc' | undefined;

export interface SortInfo {
  sortOrder: SortOrder;
  sortBy: string;
}

export interface TableItem {
  id: string;
}

export interface TableColumn<T> {
  key: string;
  label: string;
  props?: TableCellProps;
  headProps?: TableCellProps;
  bodyProps?: TableCellProps;
  itemShouldRender?: (item: T, index: number) => ReactNode;
}
