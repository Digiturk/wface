import * as React from 'react';
import { FC } from 'react';
import DialogContent, { DialogContentProps } from '@mui/material/DialogContent'
import makeStyles from '@mui/styles/makeStyles';



export interface WDialogContentProps extends DialogContentProps { }

  const useStyles = makeStyles((theme: any) => ({
  root: {
  }
  }));


export const WDialogContentInner : React.FC<DialogContentProps>=React.forwardRef((props) => {
  const classes = useStyles();
  return (
    <DialogContent {...props} className={classes.root}>
    {props.children}
  </DialogContent>
  );
});
  
export const WDialogContent = (WDialogContentInner);