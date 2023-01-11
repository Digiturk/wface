export default interface IHttpService {
  getConfig(): any;
  get<T = any>(url: string, params?:{}): Promise<T>;
  post<T = any>(url: string, data?: {}): Promise<T>;
}