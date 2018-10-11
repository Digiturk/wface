import { IConfiguration } from "@wface/ioc";
import AuthService from '../../src/services/AuthService';
import { DemoScreen } from '../../src/screens/DemoScreen'

const config = {
  title: 'WFace Boilerplate',
  projectName: 'WFace',  
  screenList: { 
    DemoScreen
  },      
  authService: new AuthService(),
  businessService: null,
} as IConfiguration

export default config;