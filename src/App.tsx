import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import { router } from '~routers';
import { ThemeProvider } from '~shared';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Suspense>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
