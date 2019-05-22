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

export class WBasicDialog extends React.Component<WBasicDialogProps, {}> {
  public render() {
    return (
      <WDialog 
        open={this.props.open}
        {...this.props}      
      >
        {this.props.title && <WDialogTitle>{this.props.title}</WDialogTitle>}
        <WDialogContent>
          {typeof this.props.children === "string" ? 
            <WDialogContentText>{this.props.children}</WDialogContentText> :
            this.props.children
          }
        </WDialogContent>
        {this.props.actions && this.props.actions.length > 0 && 
          <WDialogActions>
            {this.props.actions.map(action => (
              <WButton id={action.id} onClick={action.onClick} color="primary">{action.text}</WButton>
            ))}
          </WDialogActions>
        }
      </WDialog>
    );
  }
}