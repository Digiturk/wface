import * as React from 'react';

export interface BaseScreenProps {
  openScreen: (screen: String, initialValues?: any) => boolean;
  showSnackbar: (message: string, type?: 'error' | 'success' | 'warning' | 'info', duration?: number) => void;
  changeScreenMode: (mode: 'normal' | 'loading') => void;
}

export const BaseScreenPropsContext = React.createContext<BaseScreenProps>(null as any);

export const useBaseScreenProps = () => React.useContext(BaseScreenPropsContext);