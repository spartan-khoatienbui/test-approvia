import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export function useResponsiveUp(start: number | Breakpoint) {
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints.up(start));
}

export function useResponsiveDown(start: number | Breakpoint) {
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints.down(start));
}

export function useResponsiveBetween(start: number | Breakpoint, end: number | Breakpoint) {
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints.between(start, end));
}

export function useResponsiveOnly(start: Breakpoint) {
  const theme = useTheme();

  return useMediaQuery(theme.breakpoints.only(start));
}
