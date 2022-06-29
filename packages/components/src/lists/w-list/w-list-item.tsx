import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import ListItem, { ListItemProps } from '@mui/material/ListItem';
import { emphasize } from '@mui/material/styles';
import * as React from 'react';
import { BaseComponentProps } from '../../base/base-component-props';
import { WTheme } from '../../others/w-theme-provider/w-theme';

export type WListItemProps<D extends React.ElementType = "li"> = BaseComponentProps & ListItemProps<D> & {
};


const WListItemInner: React.FC<WListItemProps> = (props: WListItemProps) => {
 
  const {id="",dense=true} = props;

  return (
    <ListItem {...props} />
  )

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
