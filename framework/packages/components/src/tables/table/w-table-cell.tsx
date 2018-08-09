import * as React from 'react'
import { TableCell } from '@material-ui/core'
import { TableCellProps } from '@material-ui/core/TableCell'

export interface WTableCellProps extends TableCellProps { }

export class WTableCell extends React.Component<WTableCellProps, {}> {
  public render() {
    return <TableCell {...this.props} />
  }
}