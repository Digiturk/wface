import axios from 'axios';
import { injectable, inject } from "inversify";
import { IHttpService, UserContext } from '../../../';

@injectable()
export default class DefaultHttpService implements IHttpService {

  @inject("UserContext") userContext!: UserContext;

  public getConfig(): any {
    return {
      headers: {
        token: this.userContext.token
      }
    }
  }

  public get<T = any>(url: string, params?:{}): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      axios.get<T>(url, {...this.getConfig(), params: params })
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    });
  }  

  public post<T = any>(url: string, data?: {}): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      axios.post(url, data, this.getConfig())
        .then(response => resolve(response.data as T))
        .catch(error => reject(error))
    })
  }
}