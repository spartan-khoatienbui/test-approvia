import { FC } from 'react';
import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';

import { HEADER, NAV } from '~configs';
import { useResponsiveUp } from '~shared';

// ----------------------------------------------------------------------

const SPACING = 8;

type Props = {
  children: React.ReactNode;
  sx?: SxProps;
};

const Main: FC<Props> = ({ children, sx, ...other }) => {
  const lgUp = useResponsiveUp('lg');

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        flexDirection: 'column',
        py: `${HEADER.H_MOBILE + SPACING}px`,
        ...(lgUp && {
          px: 2,
          py: `${HEADER.H_DESKTOP + SPACING}px`,
          width: `calc(100% - ${NAV.WIDTH}px)`,
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
};

export default Main;
