import { createContext, useCallback, useEffect, useState } from 'react';

import ToastContainer from '~shared/components/atoms/ToastContainer.tsx';
import { EMPTY_TOAST_INFO } from '~shared/constants/toast.ts';
import { ToastInfo } from '~shared/types/toast.ts';

type ToastContextType = {
  toastInfo: ToastInfo;
  handleClose: () => void;
  setToastInfo: (toastInfo: ToastInfo | ((toastInfo: ToastInfo) => ToastInfo)) => void;
};

type Props = { children: React.ReactNode };

const ToastContext = createContext<ToastContextType>({} as ToastContextType);

const ToastProvider = ({ children }: Props) => {
  const [toastInfo, setToastInfo] = useState<ToastInfo>(EMPTY_TOAST_INFO);

  useEffect(() => {
    const toastChange = (event: StorageEvent) => {
      if (event.key === 'toastInfo' && event.newValue) {
        setToastInfo((prevState) => ({
          ...prevState,
          ...JSON.parse(event.newValue || '{}'),
        }));
      }
    };
    window.addEventListener('storage', toastChange);
    return () => window.removeEventListener('storage', toastChange);
  }, []);

  const handleClose = useCallback(
    () => setToastInfo((prevState) => ({ ...prevState, isOpen: false })),
    []
  );

  return (
    <ToastContext.Provider
      value={{
        toastInfo,
        handleClose,
        setToastInfo,
      }}
    >
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastProvider };
