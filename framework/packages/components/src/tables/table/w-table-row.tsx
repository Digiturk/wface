import * as React from 'react'
import { TableRow } from '@material-ui/core'
import { TableRowProps } from '@material-ui/core/TableRow'

export interface WTableRowProps extends TableRowProps { }

export class WTableRow extends React.Component<WTableRowProps, {}> {
  public render() {
    return <TableRow {...this.props} />
  }
}