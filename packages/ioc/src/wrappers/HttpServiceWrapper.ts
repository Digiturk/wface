import IHttpService from '../interfaces/IHttpService';
import { injectable, inject } from "inversify";

@injectable()
export default class HttpServiceWrapper implements IHttpService {
  
  @inject("IHttpServiceInner") private _Service: IHttpService;

  getConfig() {
    return this._Service.getConfig();
  }

  public get<T = any>(url: string, params?:{}): Promise<T> {
    return this._Service.get<T>(url, params);
  }  

  public post<T = any>(url: string, data?: {}): Promise<T> {
    return this._Service.post<T>(url, data);
  }
}