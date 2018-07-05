import * as React from 'react';
import { CardActions } from '@material-ui/core'
import { CardActionsProps } from '@material-ui/core/CardActions';

export interface WCardActionsProps extends CardActionsProps { }

export class WCardActions extends React.Component<WCardActionsProps, {}> {
    public render() {
        return <CardActions {...this.props}/> 
    }
}