import * as React from 'react';
import Container, { ContainerProps } from '@mui/material/Container';

export interface WContainerProps extends ContainerProps {

}

export class WContainer extends React.Component<WContainerProps, {}> {
  public render() {
    return <Container {...this.props}/>
  }
}

