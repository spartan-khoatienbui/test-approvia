import { Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';

import reactLogo from '~assets/react.svg';
import viteLogo from '~assets/vite.svg';
import { Image } from '~shared/components';

// ----------------------------------------------------------------------

const AppView = () => {
  return (
    <Container maxWidth="xl">
      <Stack spacing={5} sx={{ textAlign: 'center' }}>
        <Box display="flex" justifyContent="center" alignItems="center" gap={3}>
          <Link to="https://vitejs.dev" target="_blank">
            <Image src={viteLogo} alt="Vite logo" sx={{ height: '6rem' }} />
          </Link>
          <Link to="https://react.dev" target="_blank">
            <Image src={reactLogo} alt="React logo" sx={{ height: '6rem' }} />
          </Link>
        </Box>
        <Typography variant="h1">Vite + React</Typography>
        <Typography variant="body1">Click on the Vite and React logos to learn more</Typography>
      </Stack>
    </Container>
  );
};

export default AppView;
