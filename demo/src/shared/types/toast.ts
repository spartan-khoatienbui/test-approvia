export type ToastType = 'success' | 'warning' | 'error' | 'info';

export type ToastOptions = {
  type?: ToastType;
  autoHideDuration?: number;
};

export type ToastInfo = ToastOptions & {
  key: string;
  isOpen: boolean;
  message: string;
};

export class ToastEvent extends Event {
  type: ToastType;
  message: string;
  options: ToastOptions;

  constructor(info: ToastInfo) {
    super('toast');
    this.type = info.type || 'success';
    this.message = info.message;
    this.options = info;
  }
}
