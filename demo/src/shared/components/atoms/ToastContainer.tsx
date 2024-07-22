import { useContext } from 'react';
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';

import { ToastContext } from '~shared';

const ToastContainer = () => {
  const { toastInfo, handleClose } = useContext(ToastContext);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={toastInfo.isOpen}
      autoHideDuration={toastInfo.autoHideDuration}
      onClose={handleClose}
    >
      <Alert severity={toastInfo.type} variant="filled" sx={{ width: '400px' }}>
        {toastInfo.message}
      </Alert>
    </Snackbar>
  );
};

export default ToastContainer;
