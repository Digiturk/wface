import * as React from 'react';
import { SnackbarProvider, SnackbarProviderProps, withSnackbar, useSnackbar } from 'notistack';

export interface WSnackbarProviderProps extends SnackbarProviderProps{
}

export class WSnackbarProvider extends React.Component<WSnackbarProviderProps, any> {
  public render() {
    return (
      <SnackbarProvider {...this.props}>
        {this.props.children}
      </SnackbarProvider>
    );
  }
}

export { withSnackbar, useSnackbar };