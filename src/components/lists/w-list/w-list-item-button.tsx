import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton';
import { emphasize } from '@mui/material/styles';
import React, { FC } from 'react';
import { BaseComponentProps } from '../../base/base-component-props';
import makeStyles from '@mui/styles/makeStyles';

export type WListItemButtonProps = BaseComponentProps & ListItemButtonProps & {
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

export const WListItemButton: FC<WListItemButtonProps> = ({ dense = true, ...rest }) => {
  const classes = useStyles();

  return <ListItemButton {...rest} dense={dense} classes={classes} />
}