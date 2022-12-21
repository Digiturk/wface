import * as React from 'react';
import { Toolbar } from '@mui/material';
import { ToolbarProps } from '@mui/material/Toolbar';
import { BaseComponentProps } from '../../base/base-component-props';

import { AppContext, AppContextActions, ScreenData } from '@wface/store';
export type WCustomToolBarProps = BaseComponentProps & ToolbarProps & { 
  appContext: AppContext,
}

export const WCustomToolBar : React.FC<WCustomToolBarProps> = React.forwardRef((props) => {
  return (
    <Toolbar  {...props} />
  );
});

