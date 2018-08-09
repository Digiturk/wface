import * as React from 'react'
import { TableHead } from '@material-ui/core'
import { TableHeadProps } from '@material-ui/core/TableHead'

export interface WTableHeadProps extends TableHeadProps { }

export class WTableHead extends React.Component<WTableHeadProps, {}> {
  public render() {
    return <TableHead {...this.props} />
  }
}