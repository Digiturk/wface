import * as React from 'react';
import { Tab } from '@mui/material';
import { TabProps } from '@mui/material/Tab';
import { BaseComponentProps } from '../../base/base-component-props';


export type WTabProps = BaseComponentProps & TabProps & {   
}

export const   WTab  : React.FC<WTabProps> = React.forwardRef((props) => {
  return <Tab {...props} />
});

