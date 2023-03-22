import React, { FC, createContext, useMemo, useCallback, useContext, useEffect, useState, useRef } from "react";
import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import { useAppContext } from "./app-context";

interface Result<T> {
  data: T,
  hasError: boolean;
  error: any;
  errorMessage: string;
  details?: any;
  status?: AxiosResponse['status'];
}

interface ApiContextValue {
  authenticated: boolean;
  get: <T = any>(resource: string) => Promise<Result<T>>;
  post: <T = any>(resource: string, data?: any) => Promise<Result<T>>;
  put: <T = any>(resource: string, data?: any) => Promise<Result<T>>;
  delete: <T = any>(resource: string) => Promise<Result<T>>;
}

const ApiContext = createContext<ApiContextValue>(null as any);

function toResult<T>(axiosResponse: AxiosResponse<T>): Result<T> {
  if (axiosResponse.status >= 200 && axiosResponse.status < 300) {
    return {
      data: axiosResponse.data,
      hasError: false,
      status: axiosResponse.status,
      errorMessage: '',
      error: ''
    }
  } else {
    return {
      data: undefined as any,
      hasError: true,
      errorMessage: axiosResponse.statusText,
      status: axiosResponse.status,
      error: axiosResponse.statusText
    }
  }
}

function toResultErr<T>(error: any): Result<T> {
  if(error.response) {
    let message = error.response?.statusText || 'Bir sistem hatası gerçekleşti, lütfen daha sonra tekrar deneyiniz';

    return {
      data: undefined as any,
      error,
      errorMessage: message,
      hasError: true,
      status: error.response?.status
    };
  } else {
    return {
      data: undefined as any,
      error: error,
      errorMessage: "Sistem hatası",
      hasError: true
    }
  }
}

export interface ApiContextProviderProps {
  children: React.ReactNode;
}

export const ApiContextProvider: FC<ApiContextProviderProps> = ({ children }) => {
  const { configuration } = useAppContext();
  const baseUrl = configuration.api?.baseUrl || '';
  const useToken = configuration.api?.useToken || (() => '');
  const token = useToken();
  const axios = useRef<AxiosInstance>(Axios.create({ baseURL: `${baseUrl}/` }));
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const get = useCallback(async <T = any>(resource: string): Promise<Result<T>> => {
    try {
      const result = await axios.current.get<T>(resource);
      return toResult<T>(result);
    }
    catch (err) {
      return toResultErr<T>(err);
    }
  }, []);

  const post = useCallback(async <T = any>(resource: string, data?: any): Promise<Result<T>> => {
    try {
      const result = await axios.current.post<T>(resource, data);
      return toResult(result);
    }
    catch (err) {
      return toResultErr<T>(err);
    }
  }, []);

  const put = useCallback(async <T = any>(resource: string, data?: any): Promise<Result<T>> => {
    try {
      const result = await axios.current.put<T>(resource, data);
      return toResult(result);
    }
    catch (err) {
      return toResultErr<T>(err);
    }
  }, []);

  const deleteFunc = useCallback(async <T = any>(resource: string): Promise<Result<T>> => {
    try {
      const result = await axios.current.delete<T>(resource);
      return toResult(result);
    }
    catch (err) {
      return toResultErr<T>(err);
    }
  }, []);

  const value = useMemo<ApiContextValue>(() => ({
    authenticated,
    get,
    post,
    put,
    delete: deleteFunc
  }), [authenticated, get, post, put, deleteFunc]);

  useEffect(() => {
    axios.current.defaults.headers['Authorization'] = token ? 'Bearer ' + token : '';
    setAuthenticated(!!axios.current.defaults.headers['Authorization']);
  }, [token]);

  return (
    <ApiContext.Provider value={value}>
      {children}
    </ApiContext.Provider>
  );
}

export const useApi = () => useContext(ApiContext);