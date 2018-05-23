import * as React from 'react';
import { IconButton, Icon } from '@material-ui/core';
import { IconButtonProps } from '@material-ui/core/IconButton';

export interface WIconButtonProps extends IconButtonProps {}

export class WIconButton extends React.Component<WIconButtonProps, {}> {
    public render() {
        return <IconButton {...this.props} />
    }
}