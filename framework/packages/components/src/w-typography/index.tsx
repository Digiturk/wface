import * as React from 'react';
import { Typography } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';

export interface WTypographyProps extends TypographyProps {}

export class WTypography extends React.Component<WTypographyProps, any> {
    public render() {
        return <Typography {...this.props} />
    }
}