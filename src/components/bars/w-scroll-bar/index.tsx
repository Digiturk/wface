import * as React from 'react';
// @ts-ignore
import { Scrollbars } from 'react-custom-scrollbars';

export interface WScrollBarProps { }

export const WScrollBar : React.FC<WScrollBarProps> = React.forwardRef((props, ref) => {
  return (
    <Scrollbars  {...props} ref={ref} />
  );
});


