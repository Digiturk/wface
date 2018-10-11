import * as React from 'react'
// import MaterialTable from 'material-table'
const MaterialTable = require('material-table')

export interface WTableAction {
  icon: string;
  onClick: (event: any, data: object | object[]) => void;
  tooltip?: string;
  isFreeAction?: boolean;
}

export interface WTableColumn {
  hidden?: boolean;
  isNumeric?: boolean;
  field?: string;
  lookup?: object;
  render?: (data: any) => any;
  title: string;
}

export interface WTableOptions {
  columnsButton?: boolean;
  filtering?: boolean;
  paging?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  search?: boolean;
  selection?: boolean;
  toolbar?: boolean;
}

export interface WTableProps {
  actions?: WTableAction[];
  columns: WTableColumn[];  
  data: object[];
  options?: WTableOptions;
  title?: string;
}

class WTable extends React.Component<WTableProps, {}> {
  public render() {    
    return <MaterialTable {...this.props}/>    
  }
}

export { WTable }