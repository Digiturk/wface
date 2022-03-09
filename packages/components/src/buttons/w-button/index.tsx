import * as React from 'react';
import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material/Button';
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import { WTheme } from '../../others/w-theme-provider/w-theme';
import { BaseComponentProps } from '../../base/base-component-props';

export type WButtonProps = BaseComponentProps & ButtonProps & {
}

class WButtonInner extends React.Component<WButtonProps, any> {
  static defaultProps: WButtonProps = { color: "primary" } as any

  public render() {
    return (
      <Button {...this.props} classes={this.props.classes} />
    )
  }
}

const styles = (theme: WTheme) => createStyles({
  root: {
    textTransform: 'none',
    boxShadow: theme.designDetails.defaultElevation ? '' : 'none',
  }
});

const WButton = withStyles(styles, { withTheme: true })(React.forwardRef<any, WButtonProps>((props, ref) => <WButtonInner {...props} ref={ref} />));

export { WButton }
