import * as React from 'react';
import { Button } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';

export interface WButtonProps extends ButtonProps { }

export class WButton extends React.Component<WButtonProps, any> {
    public render() {
        const props = Object.assign({variant: 'contained', color: 'primary'}, this.props);

        return (
            <Button {...props} />
        )
    }
}
