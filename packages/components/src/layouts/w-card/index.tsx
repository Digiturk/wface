import React, { FC } from 'react';
import { Card } from '@mui/material';
import { CardProps } from '@mui/material/Card';
import { WTheme } from '../../others/w-theme-provider/w-theme';
import { useTheme } from '@mui/styles';
import makeStyles from '@mui/styles/makeStyles';

export interface WCardProps extends CardProps {
  ref?: any;
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    margin: theme.spacing(1)
  }
}));

export const WCard: FC<CardProps> = (props) => {
  const theme = useTheme<WTheme>();
  const classes = useStyles();

  return (
    <Card
      elevation={theme.designDetails.defaultElevation}
      {...props}
      classes={classes}
    />
  )
}

export * from './w-card-action-area';
export * from './w-card-actions';
export * from './w-card-content';
export * from './w-card-header';

