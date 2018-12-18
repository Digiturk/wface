import IHttpService from '../interfaces/IHttpService';
import axios from 'axios';
import { injectable } from "inversify";

@injectable()
export default class DefaultHttpService implements IHttpService {
  public get<T = any>(url: string, params?:{}): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      axios.get<T>(url, { params: params})
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    });
  }  

  public post<T = any>(url: string, data?: {}): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      axios.post(url, data)
        .then(response => resolve(response.data as T))
        .catch(error => reject(error))
    })
  }
}