import * as React from 'react';
import Skeleton, { SkeletonProps } from '@mui/material/Skeleton';

export interface WSkeletonProps extends SkeletonProps {
}

export class WSkeleton extends React.Component<WSkeletonProps, {}> {
  public render() {
    return <Skeleton {...this.props}/>
  }
}