//#region imports

import * as React from 'react';
import { 
    Input, InputLabel, 
    InputAdornment, TextField
} from '@material-ui/core';
import {    
    Visibility, VisibilityOff
} from '@material-ui/icons'
import { WIconButton } from '../w-icon-button';
import { TextFieldProps } from '@material-ui/core/TextField';

//#endregion

//#region export subtypes

export interface WTextFieldButton {
    icon: React.ReactNode;
    onClick(e, val: String): void;
}
export interface WTextFieldProps extends TextFieldProps {
    leftButtons?: WTextFieldButton[];
    rightButtons?: WTextFieldButton[];
}

//#endregion

export class WTextField extends React.Component<WTextFieldProps, any> {
    
    constructor(props) {
        super(props);   
        
        this.state = {
            value: this.props.defaultValue,
            showPassword: false
        }
    }

    //#region render methods

    private renderButtons(buttons: WTextFieldButton[]) : any[] {
        return buttons.map(btn => {
            return (
                <WIconButton
                    onClick={() => btn.onClick && btn.onClick.bind(this)(null, this.state.value)}
                    onMouseDown={() => event.preventDefault()}>
                    {btn.icon}
                </WIconButton>
            );
        })
    }

    private renderAdornments() {
        let leftButtons = this.props.leftButtons || [];
        let rightButtons = this.props.rightButtons || [];

        if(this.props.type == "password") {
            let action = {
                icon: this.state.showPassword ? <VisibilityOff /> : <Visibility/>,
                onClick: function(e, value: string) {
                    this.setState({ showPassword: !this.state.showPassword });
                }
            } as WTextFieldButton;
            rightButtons.push(action);
        }

        return {
            startAdornment: leftButtons.length > 0 &&
                <InputAdornment position="start">
                    {this.renderButtons(leftButtons)}
                </InputAdornment>,
            endAdornment: rightButtons.length > 0 &&
                <InputAdornment position="end">
                    {this.renderButtons(rightButtons)}
                </InputAdornment>
        };
    }

    public render() {
        let adorments = this.renderAdornments();        

        return (
            <TextField
                {...this.props}                 
                type={this.props.type == 'password' && !this.state.showPassword ? 'password' : 'text'}
                InputProps={adorments}                          
            />
        );
    }

     //#endregion    
}