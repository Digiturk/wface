import { AppContext, UserContext, ScreenData } from "@wface/store";
import { IHttpService } from '@wface/ioc';

export interface BaseScreenProps {
  appContext: AppContext;
  httpService: IHttpService;
  userContext: UserContext;
  screenData: ScreenData;
  openScreen: (screen: String, initialValues?: any) => boolean;
  showSnackbar: (message: string, type?: 'error' | 'success' | 'warning' | 'info', duration?: number) => void
}