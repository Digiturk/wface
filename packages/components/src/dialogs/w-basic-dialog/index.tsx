import * as React from 'react';
import { WDialog, WDialogProps } from '../w-dialog'
import { WDialogActions } from '../w-dialog/w-dialog-actions'
import { WDialogContentText } from '../w-dialog/w-dialog-content-text'
import { WDialogContent } from '../w-dialog/w-dialog-content'
import { WDialogTitle } from '../w-dialog/w-dialog-title'
import { WButton } from '../../buttons/w-button';
import { BaseComponentProps } from '../../base/base-component-props';

export type WDialogAction = BaseComponentProps & { 
  text: string
  onClick: (event:any) => void,
}

export type WBasicDialogProps = BaseComponentProps & WDialogProps & { 
  actions?: WDialogAction[];
  open: boolean;  
  title?: string;
}


export const   WBasicDialog: React.FC<WBasicDialogProps> = React.forwardRef((props) => {
  return (
    <WDialog 
        open={props.open}
        {...props}      
      >
        {props.title && <WDialogTitle>{props.title}</WDialogTitle>}
        <WDialogContent>
          {typeof props.children === "string" ? 
            <WDialogContentText>{props.children}</WDialogContentText> :
            props.children
          }
        </WDialogContent>
        {props.actions && props.actions.length > 0 && 
          <WDialogActions>
            {props.actions.map(action => (
              <WButton id={action.id} onClick={action.onClick} color="primary">{action.text}</WButton>
            ))}
          </WDialogActions>
        }
      </WDialog>
  );
});

