import { TableColumnsType } from "antd";

export type TableColumn<T> = TableColumnsType<T>[number] & {
  key: string;
  adjustable?: boolean;
};
export type TableColumnPersisted = { key: string; visible: boolean };

export type TableColumns<T = unknown> = Array<TableColumn<T>>;
export type TableColumnsPersisted = Array<TableColumnPersisted>;
export type TableColumnCombined<T> = Array<TableColumn<T> & TableColumnPersisted & { adjustable?: boolean }>;
