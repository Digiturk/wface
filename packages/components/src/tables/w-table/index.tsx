import * as React from 'react'
import MaterialTable, { MaterialTableProps } from 'material-table'

export interface WTableProps extends MaterialTableProps {
}

class WTable extends React.Component<WTableProps, {}> {
  public render() {    
    return <MaterialTable {...this.props}/>    
  }
}

export { WTable }