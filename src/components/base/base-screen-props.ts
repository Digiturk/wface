import * as React from 'react';
import { ScreenData } from "../../";

export interface BaseScreenProps {
  screenData: ScreenData;
  closeScreen: (screen: String) => boolean;
  openScreen: (screen: String, initialValues?: any) => boolean;
  showSnackbar: (message: string, type?: 'error' | 'success' | 'warning' | 'info', duration?: number) => void;
  changeScreenMode: (mode: 'normal' | 'loading') => void;
  setConfirmOnClose: (confirmOnClose: boolean, confirmOnCloseMessage?: string) => void;
}

export const BaseScreenPropsContext = React.createContext<BaseScreenProps>(null as any);

export const useBaseScreenProps = () => React.useContext(BaseScreenPropsContext);