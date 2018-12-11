import { AppContext, UserContext, ScreenData } from "@wface/store";
import { IHttpService } from '@wface/ioc';

export interface BaseScreenProps {
  appContext: AppContext;
  httpService: IHttpService;
  userContext: UserContext;
  screenData: ScreenData;
  closeScreen: (screen: String) => boolean;
  openScreen: (screen: String, initialValues?: any) => boolean;
  showSnackbar: (message: string, type?: 'error' | 'success' | 'warning' | 'info', duration?: number) => void;
  setValue: (key: string, value: any) => void;
}