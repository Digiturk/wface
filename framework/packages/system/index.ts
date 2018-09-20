import { IProjectConfiguration, IBusinessService, IAuthService } from '@wface/ioc'
import TestLoginScreen from './test-login-screen';
import TestAuthService from './TestAuthService';

// Screens
import { TestScreen } from './src/test-screen';

const config = {
  title: 'Deneme',
  projectName: 'Test',
  screenList: { 
    TestScreen 
  },  
  loginScreen: null,
  authServiceType: null,
  businessServiceType: null,
} as IProjectConfiguration;

export default config;