//#region imports

import { InputAdornment, TextField } from '@mui/material';
import { WIconButton } from '../../buttons/w-icon-button';
import { WIcon } from '../../medias/w-icon'
import { TextFieldProps } from '@mui/material/TextField';
import { BaseComponentProps } from '../../base/base-component-props';
import React, { FC, useCallback, useMemo, useRef, useState } from 'react';

//#endregion

//#region export subtypes

export type WTextFieldButton = BaseComponentProps & {
  icon: React.ReactNode;
  onClick(event: any, val: String): void;
}

export type WTextFieldProps = BaseComponentProps & TextFieldProps & {
  leftButtons?: WTextFieldButton[];
  rightButtons?: WTextFieldButton[];
}

export interface WTextFieldState {
  showPassword: boolean
}

export const WTextField: FC<WTextFieldProps> = (props) => {
  const { 
    leftButtons = [], rightButtons = [], type, 
    InputProps, inputProps, ...restProps 
  } = props;
  const textFieldRef = useRef();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const innerType = useMemo(() => type === "password" && showPassword ? "text" : type, [type, showPassword]);

  const renderButtons = useCallback((buttons: WTextFieldButton[]): any[] => {
    return buttons.map((btn, index) => {
      return (
        <span key={index}>
          <WIconButton
            id={btn.id}
            onClick={() => btn.onClick && btn.onClick.bind(this)(null, null as any)}
            onMouseDown={() => event?.preventDefault()}>
            {btn.icon}
          </WIconButton>
        </span>
      );
    })
  }, []);

  const renderAdornments = useCallback(() => {
    const result = {} as any;

    if (type == "password") {
      let action = {
        icon: <WIcon>{showPassword ? "visibility_off" : "visibility"}</WIcon>,
        onClick: function (e, value: string) {
          // @ts-ignore
          setShowPassword(prev => !prev);
        }
      } as WTextFieldButton;
      rightButtons.push(action);
    }

    if (leftButtons.length > 0) {
      result.startAdornment = (
        <InputAdornment position="start">
          {renderButtons(leftButtons)}
        </InputAdornment>
      );
    }

    if (rightButtons.length > 0) {
      result.endAdornment = (
        <InputAdornment position="end">
          {renderButtons(rightButtons)}
        </InputAdornment>
      );
    }

    return result;
  }, [type, showPassword, leftButtons, rightButtons]);

  let innerInputProps = useMemo(() => ({ ...InputProps, ...renderAdornments() }), [InputProps, renderAdornments]);

  return (
    <TextField
      {...props}
      type={innerType}
      InputProps={innerInputProps}
      inputProps={{
        ...inputProps,
        ref: textFieldRef
      }}
    />
  );
}
