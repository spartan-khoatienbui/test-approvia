import { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';

export type GetParams<T> = {
  path: string;
  config?: AxiosRequestConfig;
  customHeader?: RawAxiosRequestHeaders;
  applyMiddleWare?: boolean;
  params?: T;
};

export type PostParams<T> = GetParams<T> & {
  data?: T;
};
