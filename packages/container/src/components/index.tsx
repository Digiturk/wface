import { IComponents } from '@wface/ioc';
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
  ScreenWrapper: WScreenWrapper,
  NoPage: NoPage,
  ErrorPage: ErrorPage
}

export default components;

