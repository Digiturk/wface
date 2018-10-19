import { AppContext, UserContext, ScreenData } from "@wface/store";

export interface BaseScreenProps {
  appContext: AppContext;
  userContext: UserContext;
  screenData: ScreenData;
  openScreen: (screen: String, initialValues?: any) => boolean;
}