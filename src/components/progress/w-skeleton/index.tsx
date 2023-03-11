import * as React from 'react';
import Skeleton, { SkeletonProps } from '@mui/material/Skeleton';

export interface WSkeletonProps extends SkeletonProps {
}

export const WSkeleton: React.FC<WSkeletonProps> = React.forwardRef((props, ref) => {
  return (
    <Skeleton  {...props} ref={ref} />
  );
});

