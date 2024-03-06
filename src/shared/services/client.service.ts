import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

import { GetParams, PostParams } from './common.service';
import { inMemoryJWTService } from './jwt.service';

import { API_ENDPOINT } from '~configs';

export const axiosClient = applyCaseMiddleware(
  axios.create({
    baseURL: API_ENDPOINT,
    // https://github.com/axios/axios/issues/5058#issuecomment-1272107602
    // Example: Params { a: ['b', 'c']}
    // From (by default - false) 'a[]=b&a[]=c'
    // To (by null) 'a=b&a=c'
    paramsSerializer: {
      indexes: null, // by default: false
    },
  }),
  {
    ignoreHeaders: true,
  }
);

export const getRequest = async <T>({ path, config, customHeader, params }: GetParams<T>) => {
  const token = inMemoryJWTService.getToken();
  const response = await axiosClient.get(`/${path}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      ...customHeader,
    },
    params,
    ...config,
  });
  return response.data;
};

export const postRequest = <T>({ path, config, customHeader, data }: PostParams<T>) => {
  const token = inMemoryJWTService.getToken();
  return axiosClient.post(`/${path}`, data, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      ...customHeader,
    },
    ...config,
  });
};

export const putRequest = <T>({ path, config, customHeader, data }: PostParams<T>) => {
  const token = inMemoryJWTService.getToken();
  return axiosClient.put(`/${path}`, data, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      ...customHeader,
    },
    ...config,
  });
};

export const patchRequest = <T>({ path, config, customHeader, data }: PostParams<T>) => {
  const token = inMemoryJWTService.getToken();
  return axiosClient.patch(`/${path}`, data, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      ...customHeader,
    },
    ...config,
  });
};

export const delRequest = <T>({ path, config, customHeader }: GetParams<T>) => {
  const token = inMemoryJWTService.getToken();
  return axiosClient.delete(`/${path}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      ...customHeader,
    },
    ...config,
  });
};
