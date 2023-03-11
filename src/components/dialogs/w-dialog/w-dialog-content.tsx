import * as React from 'react';
import DialogContent, { DialogContentProps } from '@mui/material/DialogContent'

export interface WDialogContentProps extends DialogContentProps { }

export const WDialogContentInner: React.FC<DialogContentProps> = React.forwardRef((props, ref) => {
  return (
    <DialogContent {...props} ref={ref}>
      {props.children}
    </DialogContent>
  );
});

export const WDialogContent = (WDialogContentInner);