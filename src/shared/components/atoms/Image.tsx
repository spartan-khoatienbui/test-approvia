import { FC } from 'react';
import { Box, SxProps } from '@mui/material';

// ----------------------------------------------------------------------

type Props = {
  sx?: SxProps;
  src: string;
  alt?: string;
};

const Image: FC<Props> = ({ src, sx, alt = 'placeholder' }) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: '100%',
        maxHeight: 'auto',
        objectFit: 'cover',
        minWidth: '1rem',
        ...sx,
      }}
    />
  );
};

export default Image;
