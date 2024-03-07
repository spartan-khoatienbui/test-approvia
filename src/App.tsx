import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { router } from '~routers';
import { ThemeProvider } from '~shared';

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Suspense>
            <RouterProvider router={router} />
          </Suspense>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
