import * as React from 'react'
import { Collapse } from '@material-ui/core'
import { CollapseProps } from '@material-ui/core/Collapse'

export interface WCollapseProps extends CollapseProps { }

export class WCollapse extends React.Component<WCollapseProps, {}> {
  public render() {
    return <Collapse {...this.props} />
  }
}