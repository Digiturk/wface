import * as React from 'react'
import { TableBody } from '@material-ui/core'
import { TableBodyProps } from '@material-ui/core/TableBody'

export interface WTableBodyProps extends TableBodyProps { }

export class WTableBody extends React.Component<WTableBodyProps, {}> {
  public render() {
    return <TableBody {...this.props} />
  }
}