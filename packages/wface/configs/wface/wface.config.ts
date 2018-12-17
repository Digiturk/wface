import { IConfiguration, IHttpService } from "@wface/ioc";
import AuthService from '../../src/services/AuthService';
import { DemoScreen } from '../../src/screens/DemoScreen'
import { WTheme } from '@wface/components';

const theme = {
  palette: {
    type: "light"
  }
} as WTheme

const config = {
  title: 'WFace Boilerplate',
  projectName: 'WFace',  
  screenList: { 
    DemoScreen
  },
  authService: new AuthService(),  
  theme: theme
} as IConfiguration

export default config;