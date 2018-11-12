import * as React from 'react';
import { Tooltip } from '@material-ui/core';
import { TooltipProps }  from '@material-ui/core/Tooltip'

export interface WTooltipProps extends TooltipProps{
}

export class WTooltip extends React.Component<WTooltipProps, any> {
  public render() {
    return <Tooltip {...this.props}/>;
  }
}
