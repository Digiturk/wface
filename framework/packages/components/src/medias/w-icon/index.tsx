import * as React from 'react';
import { Icon } from '@material-ui/core';
import { IconProps } from '@material-ui/core/Icon';

export interface WIconProps extends IconProps {}

export class WIcon extends React.Component<WIconProps, {}> {
    public render() {
        return <Icon {...this.props}/>
    }
}