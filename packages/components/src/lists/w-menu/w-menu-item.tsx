import * as React from 'react';
import { MenuItem, createStyles, withStyles } from '@material-ui/core';
import { MenuItemProps } from '@material-ui/core/MenuItem';
import { WTheme } from '../../others/w-theme-provider/w-theme';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

export interface WMenuItemProps extends MenuItemProps { }

class WMenuItemInner extends React.Component<WMenuItemProps, {}> {
  static defaultProps: WMenuItemProps = { 
    dense: true 
  }

  public render() {
    return <MenuItem {...this.props} />
  }
}

const styles = (theme: WTheme) => createStyles({
  root: {
    '&:hover': {
      backgroundColor: theme.palette.background.default
    }
  },
  selected: {
    color: theme.palette.primary.main,
    backgroundColor: emphasize(theme.palette.background.default, 0.04) + ' !important',
    fontWeight: 500
  }
});

const WMenuItem = withStyles(styles, { withTheme: false })((props: WMenuItemProps) => <WMenuItemInner {...props} />)

export { WMenuItem };