import axios from 'axios';
import { injectable, inject } from "inversify";
import { IHttpService } from '@wface/ioc';
import { UserContext } from '@wface/store';
import Host from './host';

@injectable()
export default class HttpService implements IHttpService {  
  public getConfig(): any {
    return {
      headers: {        
      }
    }
  }

  public get<T = any>(url: string, params?:{}): Promise<T> {
    return this.post<T>(url, params);
  }  

  public post<T = any>(url: string, data?: {}): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      Host.RunService(url, data)
        .then((response:any) => {
          resolve(response)
        })
        .catch(error => reject(error))
    });
  }
}