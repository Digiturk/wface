import { AppContext, UserContext, ScreenData } from "@wface/store";

export interface BaseScreenProps {
  appContext: AppContext;
  userContext: UserContext;
  screenData: ScreenData;
  openScreen: (screen: String, initialValues?: any) => boolean;
  showSnackbar: (message: string, type?: 'error' | 'success' | 'warning' | 'info', duration?: number) => void
}