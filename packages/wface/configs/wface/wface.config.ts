import { IConfiguration, IHttpService } from "@wface/ioc";
import AuthService from '../../src/services/auth-service';
import { DemoScreen } from '../../src/screens/demo-screen'
import { DemoScreen2 } from '../../src/screens/demo-screen-2'
import { WTheme } from '@wface/components';

const theme = {
  palette: {
    type: "light"
  }
} as WTheme

const config = {  
  projectName: 'WFace',  
  screenList: { 
    DemoScreen,
    DemoScreen2
  },
  authService: AuthService,
  theme: theme,
  useLocalStorage: true
} as IConfiguration

export default config;