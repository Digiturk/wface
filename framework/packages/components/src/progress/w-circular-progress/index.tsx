import * as React from 'react'
import { CircularProgress } from '@material-ui/core';
import { CircularProgressProps } from '@material-ui/core/CircularProgress';

export interface WCircularProgressProps extends CircularProgressProps {}

export class WCircularProgress extends React.Component<WCircularProgressProps, {}> {
    public render() {
        return <CircularProgress {...this.props} />
    }
}