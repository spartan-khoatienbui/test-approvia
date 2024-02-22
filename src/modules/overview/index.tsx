import { Helmet } from 'react-helmet-async';

import { AppView } from './components';

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>
      <AppView />
    </>
  );
}
