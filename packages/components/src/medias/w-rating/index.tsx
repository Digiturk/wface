import * as React from 'react';
import Rating, { RatingProps } from '@material-ui/lab/Rating';

export interface WRatingProps extends RatingProps {
}

export class WRating extends React.Component<WRatingProps, {}> {
  public render() {
    return <Rating {...this.props}/>
  }
}