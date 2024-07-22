import { ToastOptions } from '~shared';

const success = (message: string, options?: ToastOptions) =>
  window.dispatchEvent(
    new StorageEvent('storage', {
      key: 'toastInfo',
      newValue: JSON.stringify({
        isOpen: true,
        message,
        ...(options || {}),
        type: 'success',
      }),
    })
  );

const error = (message: string, options?: ToastOptions) =>
  window.dispatchEvent(
    new StorageEvent('storage', {
      key: 'toastInfo',
      newValue: JSON.stringify({
        isOpen: true,
        message,
        ...(options || {}),
        type: 'error',
      }),
    })
  );

const warning = (message: string, options?: ToastOptions) => {
  window.dispatchEvent(
    new StorageEvent('storage', {
      key: 'toastInfo',
      newValue: JSON.stringify({
        isOpen: true,
        message,
        ...(options || {}),
        type: 'warning',
      }),
    })
  );
};

const info = (message: string, options?: ToastOptions) =>
  window.dispatchEvent(
    new StorageEvent('storage', {
      key: 'toastInfo',
      newValue: JSON.stringify({
        isOpen: true,
        message,
        ...(options || {}),
        type: 'info',
      }),
    })
  );

export const toast = { success, error, warning, info };
