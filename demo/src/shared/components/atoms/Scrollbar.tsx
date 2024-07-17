import { FC, forwardRef, memo } from 'react';
import Box from '@mui/material/Box';
import { alpha, styled, SxProps } from '@mui/material/styles';
import SimpleBar from 'simplebar-react';

// ----------------------------------------------------------------------

export const StyledRootScrollbar = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
}));

export const StyledScrollbar = styled(SimpleBar)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}));

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  sx?: SxProps;
};

const Scrollbar: FC<Props> = forwardRef<HTMLDivElement, Props>(
  ({ children, sx, ...other }, ref) => {
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (mobile) {
      return (
        <Box ref={ref} sx={{ overflow: 'auto', ...sx }} {...other}>
          {children}
        </Box>
      );
    }

    return (
      <StyledRootScrollbar>
        <StyledScrollbar
          scrollableNodeProps={{
            ref,
          }}
          clickOnTrack={false}
          sx={sx}
          {...other}
        >
          {children}
        </StyledScrollbar>
      </StyledRootScrollbar>
    );
  }
);

Scrollbar.displayName = 'Scrollbar';

export default memo(Scrollbar);
