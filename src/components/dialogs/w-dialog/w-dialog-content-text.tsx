import * as React from 'react';
import DialogContentText, { DialogContentTextProps } from '@mui/material/DialogContentText'

export interface WDialogContentTextProps extends DialogContentTextProps {}

export const WDialogContentText : React.FC<DialogContentTextProps> = React.forwardRef((props,ref) => {
  return (
    <DialogContentText ref={ref} {...props} />
  );
});

