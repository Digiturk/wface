import * as React from 'react';
import Link, { LinkProps } from '@mui/material/Link';

export interface WLinkProps extends LinkProps {
}

export const  WLink : React.FC<WLinkProps> = React.forwardRef((props) => {
  return (
    <Link  {...props} />
  );
});


