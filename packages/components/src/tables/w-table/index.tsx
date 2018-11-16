import * as React from 'react'
import MaterialTable, { MaterialTableProps } from 'material-table'
import { createStyles, withStyles } from '@material-ui/core'

export interface WTableProps extends MaterialTableProps {
  classes?: any;
}

class WTableInner extends React.Component<WTableProps, {}> {
  public render() {
    const { classes } = this.props;
    return (
      // margin: theme.spacing.unit, seklinde style ile alinabilir.
      <div className={classes.root}>
        <MaterialTable {...this.props}/>
      </div>
    )

  }
}

const styles = theme => createStyles({
  root: {
    margin: theme.spacing.unit    
  }
});

const WTable = withStyles(styles)(WTableInner)
export { WTable }