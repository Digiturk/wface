import { AppContext, UserContext, ScreenData } from "@wface/store";

export interface BaseScreenProps {
  appContext: AppContext;
  userContext: UserContext;
  screenData: ScreenData;
  openScreen: (project: String, screen: String, initialValues?: Object) => boolean;
}