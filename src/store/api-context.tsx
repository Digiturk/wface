import React, { FC, createContext, useMemo, useCallback, useContext, useEffect, useState, useRef } from "react";
import Axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
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
  fetch: <T = any>(resource: string) => Promise<T>;
}

const ApiContext = createContext<ApiContextValue>(null as any);

function toResult<T>(axiosResponse: AxiosResponse<T> | AxiosError): Result<T> {
  if (axiosResponse instanceof AxiosError) {
    let message = (axiosResponse.response?.data as any)?.message || 'Bir sistem hatası gerçekleşti, lütfen daha sonra tekrar deneyiniz';

    return {
      data: undefined as any,
      error: axiosResponse.message,
      errorMessage: message,
      hasError: true,
      status: axiosResponse.response?.status
    };
  }

  return {
    data: axiosResponse.data,
    hasError: ![200, 201].includes(axiosResponse.status),
    errorMessage: '',
    error: ''
  }
}

export interface ApiContextProviderProps {
  children: React.ReactNode;
}

export const ApiContextProvider: FC<ApiContextProviderProps> = ({ children }) => {
  const { configuration } = useAppContext();
  const { baseUrl, useToken } = configuration.api;
  const token = useToken();
  const axios = useRef<AxiosInstance>(Axios.create({ baseURL: `${baseUrl}/` }));
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const get = useCallback(async <T = any>(resource: string): Promise<Result<T>> => {
    try {
      const result = await axios.current.get<T>(resource);
      return toResult<T>(result);
    }
    catch (err) {
      return {
        data: undefined as any,
        error: err,
        errorMessage: "Sistem hatası",
        hasError: true
      }
    }
  }, []);

  const post = useCallback(async <T = any>(resource: string, data?: any): Promise<Result<T>> => {
    try {
      const result = await axios.current.post<T>(resource, data);
      return toResult(result);
    }
    catch (err) {
      return {
        data: undefined as any,
        error: err,
        errorMessage: "Sistem hatası",
        hasError: true
      }
    }
  }, []);

  const put = useCallback(async <T = any>(resource: string, data?: any): Promise<Result<T>> => {
    try {
      const result = await axios.current.put<T>(resource, data);
      return toResult(result);
    }
    catch (err) {
      return {
        data: undefined as any,
        error: err,
        errorMessage: "Sistem hatası",
        hasError: true
      }
    }
  }, []);

  const deleteFunc = useCallback(async <T = any>(resource: string): Promise<Result<T>> => {
    try {
      const result = await axios.current.delete<T>(resource);
      return toResult(result);
    }
    catch (err) {
      return {
        data: undefined as any,
        error: err,
        errorMessage: "Sistem hatası",
        hasError: true
      }
    }
  }, []);

  const fetch = useCallback(async <T = any>(resource: string): Promise<T> => {



    const result = await axios.current.get<T>(resource);
    return result.data;
  }, []);

  const value = useMemo<ApiContextValue>(() => ({
    authenticated,
    get,
    post,
    put,
    delete: deleteFunc,
    fetch
  }), [authenticated, get, post, put, deleteFunc, fetch]);

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