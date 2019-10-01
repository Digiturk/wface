import * as React from 'react';
import ButtonGroup, { ButtonGroupProps } from '@material-ui/core/ButtonGroup';

export interface WButtonGroupProps extends ButtonGroupProps { 
}

export class WButtonGroup extends React.Component<WButtonGroupProps, {}> {
  public render() {
    return <ButtonGroup {...this.props}/>
  }
}
