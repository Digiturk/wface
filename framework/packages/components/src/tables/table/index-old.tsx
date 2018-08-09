import * as React from 'react'
import { Table, withStyles } from '@material-ui/core'
import { WTableHead } from './w-table-head';
import { WTableRow } from './w-table-row';
import { WTableCell } from './w-table-cell';
import { WTableColumnDefinition } from './w-table-column-definition'
import { WTableBody } from './w-table-body';
import { WCheckbox, WPaper } from '../../../index';

export interface WTableProps {
  columns: WTableColumnDefinition[];
  data: any[];
  showSelection?: boolean;
}

export interface WTableState {
  selectedRows: any[]
}

class WTableInner extends React.Component<WTableProps & ClassNames, WTableState> {
  constructor(props) {
    super(props);

    this.state = {
      selectedRows: []
    }
  }

  private onSelectAllClick = () => {

  }

  private renderHeader() {
    return (
      <WTableHead>
        <WTableRow>
          {this.props.showSelection &&
            <WTableCell padding="checkbox">
             <WCheckbox
               indeterminate={this.state.selectedRows.length > 0 && this.state.selectedRows.length < this.props.data.length}
               checked={this.state.selectedRows.length === this.props.data.length}
               onChange={this.onSelectAllClick}
             />
            </WTableCell>
          }
          {this.props.columns.map(columnDef => (
            <WTableCell numeric={columnDef.isNumeric}>{columnDef.title}</WTableCell>
          ))}
        </WTableRow>
      </WTableHead>
    );
  }

  private renderBody() {
    return (
      <WTableBody>
        {this.props.data.map(data => (this.renderRow(data)))}
      </WTableBody>
    );
  }

  private renderRow(data: any) {
    return (
      <WTableRow>
        {this.props.showSelection &&
            <WTableCell padding="checkbox">
             <WCheckbox
               indeterminate={this.state.selectedRows.length > 0 && this.state.selectedRows.length < this.props.data.length}
               checked={this.state.selectedRows.length === this.props.data.length}
               onChange={this.onSelectAllClick}
             />
            </WTableCell>
        }
        {this.props.columns.map(columnDef => {
          const value = data[columnDef.field];
          return <WTableCell numeric={columnDef.isNumeric}>{value}</WTableCell>
        })}                
      </WTableRow>
    );
  }

  public render() {    
    const { classes } = this.props;
    return (
      <WPaper className={classes.root}>
        <Table className={classes.table}>        
          {this.renderHeader()}
          {this.renderBody()}
        </Table>
      </WPaper>
    );
  }
}

const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

type ClassNames = { classes: { root: string, table: string } };


const WTable = withStyles(styles as any)(WTableInner);
export { WTable }