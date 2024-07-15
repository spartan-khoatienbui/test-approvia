import { TSortOrder } from '~shared';

export const visuallyHidden = {
  border: 0,
  margin: -1,
  padding: 0,
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  clip: 'rect(0 0 0 0)',
};

export function emptyRows(page: number, rowsPerPage: number, arrayLength: number) {
  return page ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (a[orderBy] == null) {
    return 1;
  }
  if (b[orderBy] == null) {
    return -1;
  }
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator<T>(
  order: 'asc' | 'desc',
  orderBy: keyof T | undefined
): (a: T, b: T) => number {
  if (!orderBy) return () => 1;
  return order === 'desc'
    ? (a: T, b: T) => descendingComparator(a, b, orderBy)
    : (a: T, b: T) => -descendingComparator(a, b, orderBy);
}

interface Filter<T> {
  inputData: T[];
  comparator: (a: T, b: T) => number;
  filterName: string;
}

export function applyFilter<T extends { name: string }>({
  inputData,
  comparator,
  filterName,
}: Filter<T>) {
  const stabilizedThis = inputData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0] as T, b[0] as T);
    if (order !== 0) return order;
    return (a[1] as number) - (b[1] as number);
  });

  inputData = stabilizedThis.map((el) => el[0] as T);

  if (filterName) {
    inputData = inputData.filter(
      (user) => user.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  return inputData;
}

const SORT_ORDER_ORDER: TSortOrder[] = ['desc', 'asc', undefined];

export const nextSortOrder = (sortOrder?: TSortOrder): TSortOrder =>
  SORT_ORDER_ORDER[SORT_ORDER_ORDER.indexOf(sortOrder) + 1] || SORT_ORDER_ORDER[0];
