import * as React from 'react'
// import MaterialTable from 'material-table'
import { WTableColumnDefinition } from './w-table-column-definition';

export interface WTableProps {
  columns: (WTableColumnDefinition | string)[];
  data: any[];
}

export interface WTableState {
}

class WTable extends React.Component<WTableProps, WTableState> {
  public render() {
    return (
      <div>merhaba</div>
      // <MaterialTable
      //   columns={this.props.columns}
      //   data={this.props.data}
      // />
    );
  }
}

// const WTable = WTableInner;
export { WTable }