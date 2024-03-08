import { ReactNode } from 'react';
import { TableCellProps } from '@mui/material/TableCell';

export type TSortOrder = 'desc' | 'asc' | undefined;

export interface ISortInfo {
  sortOrder: TSortOrder;
  sortBy: string;
}

export interface ITableItem {
  id: string;
}

export interface ITableColumn<T> {
  key: string;
  label: string;
  props?: TableCellProps;
  headProps?: TableCellProps;
  bodyProps?: TableCellProps;
  itemShouldRender?: (item: T, index: number) => ReactNode;
}
