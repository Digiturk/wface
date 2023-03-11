import * as React from 'react';
import Rating, { RatingProps } from '@mui/material/Rating';

export interface WRatingProps extends RatingProps {
}

export const WRating  : React.FC<WRatingProps> = React.forwardRef((props, ref) => {
  return (
    <Rating {...props} ref={ref} />
  );
});

