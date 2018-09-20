import { Component } from 'react';
import IProjectConfiguration from './IProjectConfiguration';
import IBusinessService from './IBusinessService';
import IAuthService from './IAuthService';

export default interface IConfiguration {
  projects: {[key: string]: IProjectConfiguration};

  getTitle: () => string;
  getProjectName: () => string;
  getFavIcon: () => string;    
  getLoginScreen: () => any;
  getBusinessServiceType: () => any;
  getAuthServiceType: () => any;
}