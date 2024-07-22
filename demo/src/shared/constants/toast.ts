import { ToastInfo } from '~shared/types/toast.ts';

export const EMPTY_TOAST_INFO: ToastInfo = {
  key: '',
  isOpen: false,
  message: '',
  type: undefined,
  autoHideDuration: 5000,
};
