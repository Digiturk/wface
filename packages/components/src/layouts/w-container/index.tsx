import * as React from 'react';
import Container, { ContainerProps } from '@material-ui/core/Container';

export interface WContainerProps extends ContainerProps {

}

export class WContainer extends React.Component<WContainerProps, {}> {
  public render() {
    return <Container {...this.props}/>
  }
}

