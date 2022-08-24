import * as React from 'react';

export default interface IComponents {
  Container?: React.ReactNode;
  LoginPage?: React.ReactNode;
  MainPage?: React.ReactNode;
  ScreenWrapper?: React.ReactNode;
  NoPage?: React.ReactNode;  
  ErrorPage?: React.ElementType<any>; 
}