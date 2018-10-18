import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';

export interface WSwipeableViewsProps { }

export class WSwipeableViews extends React.Component<WSwipeableViewsProps, {}> {
  public render() {
    return <SwipeableViews {...this.props} />;
  }
}
