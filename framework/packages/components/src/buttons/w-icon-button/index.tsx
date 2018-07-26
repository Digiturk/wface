import * as React from 'react';
import { IconButton, Icon } from '@material-ui/core';
import { IconButtonProps } from '@material-ui/core/IconButton';
import { WIcon } from '../../w-icon'

export interface WIconButtonProps extends IconButtonProps {
    icon?: string
}

export class WIconButton extends React.Component<WIconButtonProps, {}> {
    public render() {        
        return (
            <IconButton {...this.props}>{
                  this.props.icon ? <WIcon>this.props.icon</WIcon> : this.props.children
                }
            </IconButton>
        );
    }
}