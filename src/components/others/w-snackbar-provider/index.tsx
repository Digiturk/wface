import * as React from 'react';
import { SnackbarProvider, SnackbarProviderProps, withSnackbar, useSnackbar } from 'notistack';

export interface WSnackbarProviderProps extends SnackbarProviderProps {
  children: React.ReactNode;
}
export const WSnackbarProvider: React.FC<WSnackbarProviderProps> = React.forwardRef((props, ref) => {

  return (
    // @ts-ignore
    <SnackbarProvider {...props} ref={ref}>
      {props.children}
    </SnackbarProvider>
  );
});



export { withSnackbar, useSnackbar };