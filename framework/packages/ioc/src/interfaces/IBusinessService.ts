export default interface IBusinessService {
  call(action: string, params: object) : Promise<any>;
}