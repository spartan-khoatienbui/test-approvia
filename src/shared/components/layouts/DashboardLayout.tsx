import Box from '@mui/material/Box';

import { Main } from '../molecules';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: 1,
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
      }}
    >
      <Main>{children}</Main>
    </Box>
  );
};

export default DashboardLayout;
