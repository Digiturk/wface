import * as React from 'react';
import { Card } from '@mui/material';
import { WithStyles } from '@mui/styles';
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import withTheme from '@mui/styles/withTheme';
import { CardProps } from '@mui/material/Card';
import { WTheme } from '../../others/w-theme-provider/w-theme';

export interface WCardProps extends CardProps {
  theme?: WTheme;
  ref?:any;
}

class WCardInner extends React.Component<WCardProps & WithStyles<string>, {}> {
  public render() {
    return <Card elevation={this.props.theme.designDetails.defaultElevation} {...this.props} classes={this.props.classes} />
  }
}

const styles = (theme: WTheme) => createStyles({
  root: {
    margin: theme.spacing(1)
  }
});

export const WCard = withStyles(styles, { withTheme: true })((props: WCardProps & WithStyles<string>) => <WCardInner {...props}/>)

export * from './w-card-action-area';
export * from './w-card-actions';
export * from './w-card-content';
export * from './w-card-header';

