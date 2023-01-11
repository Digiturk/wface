import * as React from 'react';
import Container, { ContainerProps } from '@mui/material/Container';

export interface WContainerProps extends ContainerProps {

}
export const  WContainer : React.FC<WContainerProps> = React.forwardRef((props) => {
  return (
    <Container {...props}/>
  );
});
