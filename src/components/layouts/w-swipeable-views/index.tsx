import * as React from 'react';
// @ts-ignore
import SwipeableViews from 'react-swipeable-views';

export interface WSwipeableViewsProps { }

export const  WSwipeableViews : React.FC<WSwipeableViewsProps> = React.forwardRef((props) => {
  return <SwipeableViews {...props} />;})

