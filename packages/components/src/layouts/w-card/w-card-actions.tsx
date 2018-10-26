import * as React from 'react';
import { CardActions } from '@material-ui/core'
import { CardActionsProps } from '@material-ui/core/CardActions';

export interface WCardActionsProps extends CardActionsProps {
  align?: 'left' | 'right'
}

export class WCardActions extends React.Component<WCardActionsProps, {}> {
  public render() {
    return <CardActions {...this.props} style={{justifyContent: this.props.align === "left" ? "flex-start" : "flex-end"}}/>
  }
}
