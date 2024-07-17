import { FC, forwardRef } from 'react';
import { Icon, IconifyIcon } from '@iconify/react';
import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

type Props = {
  icon: IconifyIcon | string;
  sx?: SxProps;
  width?: number;
  color?: string;
};

const Iconify: FC<Props> = forwardRef<HTMLDivElement, Props>(
  ({ icon, width = 20, sx, ...other }, ref) => (
    <Box
      ref={ref}
      component={Icon}
      className="component-iconify"
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  )
);

Iconify.displayName = 'Iconify';

export default Iconify;
