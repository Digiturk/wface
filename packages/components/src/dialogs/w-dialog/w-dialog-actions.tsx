import * as React from 'react';
import DialogActions, { DialogActionsProps } from '@mui/material/DialogActions'

export interface WDialogActionsProps extends DialogActionsProps {}

export const WDialogActions: React.FC<DialogActionsProps> = React.forwardRef((props) => {
  return (
    <DialogActions  {...props} />
  );
});

