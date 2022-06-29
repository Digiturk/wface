import * as React from 'react';
import { Tooltip } from '@mui/material';
import { TooltipProps }  from '@mui/material/Tooltip'

export interface WTooltipProps extends TooltipProps{
}


export const WTooltip: React.FC<WTooltipProps> = React.forwardRef((props) => {
  return (
    <Tooltip   {...props} />
  );
});


// export class WTooltip extends React.Component<WTooltipProps, any> {
//   public render() {
//     return <Tooltip {...this.props}/>;
//   }
// }
