import * as React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export interface WScrollBarProps { }

export const WScrollBar : React.FC<WScrollBarProps> = React.forwardRef((props) => {
  return (
    <Scrollbars  {...props} />
  );
});


