import { createStyles, withStyles } from '@material-ui/core';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import * as React from 'react';
import { BaseComponentProps } from '../../base/base-component-props';
import { WTheme } from '../../others/w-theme-provider/w-theme';

export type WListItemProps<D extends React.ElementType = "li"> = BaseComponentProps & ListItemProps<D> & { 
};

class WListItemInner extends React.Component<WListItemProps, {}> {
  static defaultProps: WListItemProps = { 
    id: '',    
    dense: true,
  }

  public render() {    
    return <ListItem {...this.props} button={this.props.button as never}/>;
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

export const WListItem = withStyles(styles, { withTheme: false })(WListItemInner);