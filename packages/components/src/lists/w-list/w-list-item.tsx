import * as React from 'react';
import { ListItem, createStyles, withStyles } from '@material-ui/core';
import { ListItemProps } from '@material-ui/core/ListItem';
import { WTheme } from '../../others/w-theme-provider/w-theme';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import { BaseComponentProps } from '../../base/base-component-props';

export type WListItemProps = BaseComponentProps & ListItemProps & { 
}

class WListItemInner extends React.Component<WListItemProps, {}> {
  static defaultProps: WListItemProps = { 
    id: '',
    dense: true 
  }

  public render() {
    return <ListItem {...this.props} />;
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

const WListItem = withStyles(styles, { withTheme: false })((props: WListItemProps) => <WListItemInner {...props} />)

export { WListItem };