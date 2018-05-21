import * as React from 'react';
import { Card } from '@material-ui/core'
import { CardProps } from 'material-ui';

export interface WCardProps extends CardProps {}

export class WCard extends React.Component<WCardProps, any> {
    public render() {
        return <Card {...this.props}/> 
    }
}