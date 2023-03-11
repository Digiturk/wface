import * as React from 'react'
import { Collapse } from '@mui/material'
import { CollapseProps } from '@mui/material/Collapse'

export interface WCollapseProps extends CollapseProps { }


export const  WCollapse : React.FC<WCollapseProps> = React.forwardRef((props, ref) => {
  return (
    <Collapse {...props} ref={ref}/>
  );
});
