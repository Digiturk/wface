import * as React from 'react';

export default interface IComponents {
  Container?: React.FC | React.ReactNode;
  LoginPage?: React.FC | React.ReactNode;
  MainPage?: React.FC | React.ReactNode;
  ScreenWrapper?: React.FC | React.ReactNode;
  NoPage?: React.FC | React.ReactNode;  
  ErrorPage?: React.FC | React.ReactNode; 
  TopbarRightItems?: React.FC | React.ReactNode;
}