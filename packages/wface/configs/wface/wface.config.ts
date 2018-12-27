import { IConfiguration, IHttpService } from "@wface/ioc";
import AuthService from '../../src/services/auth-service';
import { DemoScreen } from '../../src/screens/demo-screen'
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
  authService: AuthService,
  theme: theme
} as IConfiguration

export default config;