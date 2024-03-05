import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

// ----------------------------------------------------------------------

type Props = {
  emptyRows: number;
  height: number;
};

const TableEmptyRows: React.FC<Props> = ({ emptyRows, height }) => {
  if (!emptyRows) {
    return null;
  }

  return (
    <TableRow
      sx={{
        ...(height && {
          height: height * emptyRows,
        }),
      }}
    >
      <TableCell colSpan={9} />
    </TableRow>
  );
};

export default TableEmptyRows;
