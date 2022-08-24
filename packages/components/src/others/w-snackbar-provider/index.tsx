import * as React from 'react';
import { SnackbarProvider, SnackbarProviderProps, withSnackbar, useSnackbar } from 'notistack';

export interface WSnackbarProviderProps extends SnackbarProviderProps {
}
export const WSnackbarProvider: React.FC<WSnackbarProviderProps> = React.forwardRef((props) => {

  return (
    // @ts-ignore
    <SnackbarProvider {...props}>
      {props.children}
    </SnackbarProvider>
  );
});



export { withSnackbar, useSnackbar };