import { IComponents } from '../../';
import WContainer from './w-container';
import WLoginPage from './w-login-page';
import WMainPage from './w-main-page';
import WScreenWrapper from './w-screen-wrapper';
import NoPage from './w-screen-wrapper/no-page';
import ErrorPage from './w-screen-wrapper/error-page';

const components: IComponents = {
  Container: WContainer,
  LoginPage: WLoginPage,
  MainPage: WMainPage,
  ScreenWrapper: WScreenWrapper as any,
  NoPage: NoPage,
  ErrorPage: ErrorPage as any
}

export default components;

