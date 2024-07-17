import { FC, forwardRef } from 'react';
import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';

type Props = {
  sx?: SxProps;
  src: string;
};

const SvgColor: FC<Props> = forwardRef<HTMLDivElement, Props>(({ src, sx, ...other }, ref) => (
  <Box
    component="span"
    className="svg-color"
    ref={ref}
    sx={{
      width: 24,
      height: 24,
      display: 'inline-block',
      bgcolor: 'currentColor',
      mask: `url(${src}) no-repeat center / contain`,
      WebkitMask: `url(${src}) no-repeat center / contain`,
      ...sx,
    }}
    {...other}
  />
));

SvgColor.displayName = 'SvgColor';

export default SvgColor;
