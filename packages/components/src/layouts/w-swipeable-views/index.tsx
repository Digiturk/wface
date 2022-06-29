import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';

export interface WSwipeableViewsProps { }

export const  WSwipeableViews : React.FC<WSwipeableViewsProps> = React.forwardRef((props) => {
  return <SwipeableViews {...props} />;})

