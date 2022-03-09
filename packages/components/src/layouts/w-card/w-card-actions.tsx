import * as React from 'react';
import { CardActions } from '@mui/material'
import { CardActionsProps } from '@mui/material/CardActions';

export interface WCardActionsProps extends CardActionsProps {
  align?: 'left' | 'right'
}

export class WCardActions extends React.Component<WCardActionsProps, {}> {
  public render() {
    return <CardActions {...this.props} style={{justifyContent: this.props.align === "left" ? "flex-start" : "flex-end"}}/>
  }
}
