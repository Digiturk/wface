import { IConfiguration, IHttpService } from "@wface/ioc";
import AuthService from '../../src/services/AuthService';
import { DemoScreen, theme } from '../../src/screens/DemoScreen'
import { WTheme } from '@wface/components';

const config = {
  title: 'WFace Boilerplate',
  projectName: 'WFace',  
  screenList: { 
    DemoScreen
  },
  authService: new AuthService(),  
  theme: theme as WTheme
} as IConfiguration

export default config;