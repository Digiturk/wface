import * as React from 'react';
import CardActionArea, { CardActionAreaProps } from '@mui/material/CardActionArea';

export interface WCardActionAreaProps extends CardActionAreaProps { }

export class WCardActionArea extends React.Component<WCardActionAreaProps, {}> {
  public render() {
    return <CardActionArea {...this.props} />
  }
}