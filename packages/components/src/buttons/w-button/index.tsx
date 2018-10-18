import * as React from 'react';
import { Button } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';

export interface WButtonProps extends ButtonProps { }

export class WButton extends React.Component<WButtonProps, any> {
  static defaultProps: WButtonProps = { color: "primary" }

  public render() {
    return (
      <Button {...this.props} />
    )
  }
}
