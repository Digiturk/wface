import { IComponents } from '@wface/ioc';
import WContainer from './w-container';
import WLoginPage from './w-login-page';
import WMainPage from './w-main-page';
import WScreenWrapper from './w-screen-wrapper';

const components: IComponents = {
  Container: WContainer,
  LoginPage: WLoginPage,
  MainPage: WMainPage,
  ScreenWrapper: WScreenWrapper
}

export default components;

