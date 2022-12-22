import * as React from 'react';
import { WBasicDialog } from '../w-basic-dialog';
import { BaseComponentProps } from '../../base/base-component-props';

export type WMessageDialogProps = BaseComponentProps & { 
  open: boolean;
  title: string;
  text: string;
  icon?: 'error' | 'warning' | 'info' | 'success';
  buttons?: 'YesNo' | 'YesNoCancel' | 'Ok';
  onButtonClick?: (event:any, button: String) => void;  
}



export const WMessageDialog: React.FC<WMessageDialogProps> = (props:WMessageDialogProps) => {

  const {  id="",open= false, title='', text= '', buttons= "Ok"  } = props;

    const getButtons=()=> {
    const result = [];

    if(buttons === "YesNo" || buttons === "YesNoCancel") {
      result.push({
        text: 'Yes',
        onClick: (event:any) => { props.onButtonClick && props.onButtonClick(event, 'Yes')}
      })

      result.push({
        text: 'No',
        onClick: (event:any) => { props.onButtonClick && props.onButtonClick(event, 'No')}
      })
    }

    if(buttons === "YesNoCancel") {
      result.push({
        text: 'Cancel',
        onClick: (event:any) => { props.onButtonClick && props.onButtonClick(event, 'Cancel')}
      })
    }

    if(buttons === "Ok") {
      result.push({
        text: 'Ok',
        onClick: (event:any) => { props.onButtonClick && props.onButtonClick(event, 'Ok')}
      })
    }

    return result;
  }
  return (
    <WBasicDialog
      id={id}
      open={open}
      title={title}
      children={text} 
      actions={getButtons()}
      fullWidth
    />
  )
  }