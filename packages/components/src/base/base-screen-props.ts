import * as React from 'react';
import { AppContext, UserContext, ScreenData } from "@wface/store";
import { IHttpService } from '@wface/ioc';
import { WTheme } from '../others/w-theme-provider/w-theme';

export interface BaseScreenProps {
  appContext: AppContext;
  httpService: IHttpService;
  userContext: UserContext;
  screenData: ScreenData;
  theme: WTheme;
  closeScreen: (screen: String) => boolean;
  openScreen: (screen: String, initialValues?: any) => boolean;
  showSnackbar: (message: string, type?: 'error' | 'success' | 'warning' | 'info', duration?: number) => void;
  setValue: (key: string, value: any) => void;
  changeScreenMode: (mode: 'normal' | 'loading') => void;
  setConfirmOnClose: (confirmOnClose: boolean, confirmOnCloseMessage?: string) => void;
}

export const BaseScreenPropsContext = React.createContext<BaseScreenProps>(null);
