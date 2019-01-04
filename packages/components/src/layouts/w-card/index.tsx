import * as React from 'react';
import { Card, createStyles, withStyles, WithStyles, StyledComponentProps } from '@material-ui/core';
import { CardProps } from '@material-ui/core/Card';

export interface WCardProps extends CardProps { }

class WCardInner extends React.Component<WCardProps & WithStyles<string>, {}> {
  public render() {
    return <Card {...this.props} classes={this.props.classes}/>
  }
}

const styles = theme => createStyles({
  root: {
    margin: theme.spacing.unit,
    overflow: 'initial'
  }
});

export const WCard = withStyles(styles)((props: WCardProps & WithStyles<string>) => <WCardInner {...props}/>)

