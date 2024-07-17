import { FC, useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import { customShadows } from './custom-shadows';
import { overrides } from './overrides';
import { palette } from './palette';
import { shadows } from './shadows';
import { typography } from './typography';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

// https://mui.com/material-ui/customization/theming/#custom-variables
declare module '@mui/material/styles' {
  interface Theme {
    customShadows: ReturnType<typeof customShadows>;
  }
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const memoizedValue = useMemo(
    () => ({
      palette: palette(),
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
      shape: { borderRadius: 8 },
    }),
    []
  );

  const theme = createTheme(memoizedValue);

  theme.components = overrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};
