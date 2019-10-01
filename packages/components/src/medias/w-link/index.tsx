import * as React from 'react';
import Link, { LinkProps } from '@material-ui/core/Link';

export interface WLinkProps extends LinkProps {
}

export class WLink extends React.Component<WLinkProps, {}> {
  public render() {
    return <Link {...this.props}/>
  }  
}