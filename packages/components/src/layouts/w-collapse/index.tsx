import * as React from 'react'
import { Collapse } from '@mui/material'
import { CollapseProps } from '@mui/material/Collapse'

export interface WCollapseProps extends CollapseProps { }

export class WCollapse extends React.Component<WCollapseProps, {}> {
  public render() {
    return <Collapse {...this.props} />
  }
}