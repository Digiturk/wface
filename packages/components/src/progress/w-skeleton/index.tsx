import * as React from 'react';
import Skeleton, { SkeletonProps } from '@material-ui/lab/Skeleton';

export interface WSkeletonProps extends SkeletonProps {
}

export class WSkeleton extends React.Component<WSkeletonProps, {}> {
  public render() {
    return <Skeleton {...this.props}/>
  }
}