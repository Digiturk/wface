//#region imports

import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { InputAdornment, TextField } from '@material-ui/core';
import { WIconButton } from '../../buttons/w-icon-button';
import { WIcon } from '../../medias/w-icon'
import { TextFieldProps } from '@material-ui/core/TextField';

//#endregion

//#region export subtypes

export interface WTextFieldButton {
  icon: React.ReactNode;
  onClick(event:any, val: String): void;
}

export interface DispatchProps {
  saveScreenAny: (key: string, value: any) => void
}

export type WTextFieldProps = TextFieldProps & {  
  defaultValue?: string;
  leftButtons?: WTextFieldButton[];
  rightButtons?: WTextFieldButton[];  
}

export interface WTextFieldState {
  showPassword: boolean
}

//#endregion

export class WTextField extends React.Component<WTextFieldProps, WTextFieldState> {
  private id: string;

  constructor(props:any) {
    super(props);

    this.state = {
      showPassword: false
    }
  }

  //#region render methods

  private renderButtons(buttons: WTextFieldButton[]): any[] {
    return buttons.map(btn => {
      return (
        <WIconButton
          onClick={() => btn.onClick && btn.onClick.bind(this)(null)}
          onMouseDown={() => event.preventDefault()}>
          {btn.icon}
        </WIconButton>
      );
    })
  }

  private renderAdornments() {
    let leftButtons = this.props.leftButtons || [];
    let rightButtons = this.props.rightButtons || [];

    if (this.props.type == "password") {
      let action = {
        icon: <WIcon>{this.state.showPassword ? "visibility_off" : "visibility"}</WIcon>,
        onClick: function (e, value: string) {
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