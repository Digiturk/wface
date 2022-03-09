import * as React from 'react';
import Rating, { RatingProps } from '@mui/material/Rating';

export interface WRatingProps extends RatingProps {
}

export class WRating extends React.Component<WRatingProps, {}> {
  public render() {
    return <Rating {...this.props}/>
  }
}