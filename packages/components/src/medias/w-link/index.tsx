import * as React from 'react';
import Link, { LinkProps } from '@mui/material/Link';

export interface WLinkProps extends LinkProps {
}

export class WLink extends React.Component<WLinkProps, {}> {
  public render() {
    return <Link {...this.props}/>
  }  
}