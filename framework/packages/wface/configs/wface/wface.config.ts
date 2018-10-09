import { IConfiguration } from "@wface/ioc";
import AuthService from '../../src/implementations/AuthService';

const config = {
  title: 'WFace Boilerplate',
  projectName: 'WFace',  
  screenList: { 
  },      
  authService: new AuthService()
} as IConfiguration

export default config;