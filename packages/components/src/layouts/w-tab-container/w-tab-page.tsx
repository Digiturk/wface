import * as React from 'react';
import { WTabProps } from '../w-tabs/w-tab';
import { DistributiveOmit } from '@mui/types';

export interface WTabPageProps extends DistributiveOmit<DistributiveOmit<WTabProps, "value">, "children">{
  children?: any;
}


export const WTabPage : React.FC<WTabPageProps> = React.forwardRef((props) => {
return (
<div>lasdjasdhsajkhd</div>
  )
});
