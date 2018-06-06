import { AppContext, ScreenContext, UserContext } from "@wface/store";

export interface BaseScreenProps {
  appContext: AppContext
  screenContext: ScreenContext
  userContext: UserContext
}