import * as React from 'react';
import { Card, createStyles, withStyles, WithStyles, withTheme } from '@material-ui/core';
import { CardProps } from '@material-ui/core/Card';
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

