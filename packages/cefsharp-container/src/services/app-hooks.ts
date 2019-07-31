import IAppHooks from '@wface/ioc/src/interfaces/i-app-hooks';
import { injectable, inject } from "inversify";
import { AppContext } from '@wface/store';
import HttpService from './http-service';
import MainPage from '../components/main-page';
import ScreenWrapper from '../components/screen-wrapper';
import { IConfiguration } from '@wface/ioc';

@injectable()
export default class AppHooks implements IAppHooks {

  @inject("AppContext") _AppContext : AppContext;
  @inject("setConfig") _SetConfig  : (configuration: IConfiguration) => void;

  onAppWillMount() {
    if(this._AppContext.queryParams["appType"] === "standalone"){
      var configuration = {...this._AppContext.configuration};
      configuration.components.MainPage = MainPage;
      configuration.components.ScreenWrapper = ScreenWrapper;
      configuration.httpService = HttpService;

      this._SetConfig(configuration);
    }
  }
}