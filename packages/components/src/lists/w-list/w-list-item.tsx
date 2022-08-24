import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import ListItem, { ListItemProps } from '@mui/material/ListItem';
import { emphasize } from '@mui/material/styles';
import React, { FC } from 'react';
import { BaseComponentProps } from '../../base/base-component-props';
import { WTheme } from '../../others/w-theme-provider/w-theme';
import makeStyles from '@mui/styles/makeStyles';

export type WListItemProps<D extends React.ElementType = "li"> = BaseComponentProps & ListItemProps<D> & {
};

const useStyles = makeStyles((theme: any) => ({
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
}));

export const WListItem: FC<WListItemProps> = ({ dense = true, ...rest }) => {
  const classes = useStyles();

  return <ListItem {...rest} dense={dense} classes={classes} />
}