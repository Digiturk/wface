import * as React from 'react';
import { Button } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
import { createStyles, withStyles } from '@material-ui/core/styles';

export interface WButtonProps extends ButtonProps { }

class WButtonInner extends React.Component<WButtonProps, any> {
  static defaultProps: WButtonProps = { color: "primary" }

  public render() {
    return (
      <Button {...this.props} classes={this.props.classes}/>
    )
  }
}

const styles = (theme:any) => ({
  root: {
    textTransform: 'none'
  }
});

const WButton = withStyles(styles as any)((props: WButtonProps ) => <WButtonInner {...props}/>)

export { WButton }
