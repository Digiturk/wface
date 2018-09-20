import { Component } from 'react';
import IConfiguration from '../interfaces/IConfiguration';
import IProjectConfiguration from '../interfaces/IProjectConfiguration';
import { Injectable } from 'react.di';

@Injectable
export default class DefaultConfiguration implements IConfiguration {
  projects: {[key: string]: IProjectConfiguration};
  defaultProjectConfiguration: IProjectConfiguration;
  
  constructor(projects: {[key: string]: IProjectConfiguration}, defaultProjectConfiguration: IProjectConfiguration) {
    this.projects = projects;
    this.defaultProjectConfiguration = defaultProjectConfiguration;
  }
  
  getTitle = () => {    
    for(var key in this.projects) {
      const element = this.projects[key];
      if(element.title) {
        return element.title;        
      }
    };

    return this.defaultProjectConfiguration.title;
  }

  getProjectName = () => {
    for(var key in this.projects) {
      const element = this.projects[key];
      if(element.projectName) {
        return element.projectName;        
      }
    };

    return this.defaultProjectConfiguration.projectName;
  }

  getFavIcon = () => {
    for(var key in this.projects) {
      const element = this.projects[key];
      if(element.projectName) {
        return element.projectName;        
      }
    };

    return this.defaultProjectConfiguration.projectName;
  }

  getLoginScreen = () => {
    for(var key in this.projects) {
      const element = this.projects[key];
      if(element.loginScreen) {
        return element.loginScreen;        
      }
    };

    return this.defaultProjectConfiguration.loginScreen;
  }

  getBusinessServiceType = () => {
    for(var key in this.projects) {
      const element = this.projects[key];
      if(element.businessServiceType) {
        return element.businessServiceType;        
      }
    };

    return this.defaultProjectConfiguration.businessServiceType;
  }

  getAuthServiceType = () => {
    for(var key in this.projects) {
      const element = this.projects[key];
      if(element.authServiceType) {
        return element.authServiceType;        
      }
    };

    return this.defaultProjectConfiguration.authServiceType;
  }
}