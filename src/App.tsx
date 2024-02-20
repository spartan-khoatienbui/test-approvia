import { RouterProvider } from 'react-router-dom';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { router } from './routers';

const queryClient = new QueryClient();

const defaultTheme = createTheme();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <RouterProvider router={router} />
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
