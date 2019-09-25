import * as React from 'react';
import { createStyles, withStyles } from '@material-ui/core';
import MenuItem, { MenuItemProps } from '@material-ui/core/MenuItem';
import { WTheme } from '../../others/w-theme-provider/w-theme';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import { BaseComponentProps } from '../../base/base-component-props';

export type WMenuItemProps<D extends React.ElementType = "li"> = BaseComponentProps & MenuItemProps<D> & { 
}

class WMenuItemInner extends React.Component<WMenuItemProps, {}> {
  static defaultProps: WMenuItemProps = { 
    id: '',
    dense: true
  }

  public render() {
    return <MenuItem {...this.props} button={this.props.button as never} />
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

export const WMenuItem = withStyles(styles, { withTheme: false })(WMenuItemInner);