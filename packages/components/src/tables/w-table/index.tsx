import * as React from 'react'
import MaterialTable, { MaterialTableProps } from 'material-table'
import { createStyles, withStyles, withTheme } from '@material-ui/core'
import { WPaper } from '../../layouts/w-paper';
import { WTheme } from '../../others/w-theme-provider/w-theme';

export interface WTableProps extends MaterialTableProps {
  classes?: any;
  theme?: WTheme;
}

class WTableInner extends React.Component<WTableProps, {}> {
  public render() {
    const { classes } = this.props;
    return (
      // margin: theme.spacing.unit, seklinde style ile alinabilir.
      <div className={classes.root}>
        <MaterialTable 
          {...this.props}
          components={{
            Container: (props) => <WPaper {...props} elevation={this.props.theme.designDetails.defaultElevation}/>
          }}
        />
      </div>
    )

  }
}

const styles = theme => createStyles({
  root: {
    margin: theme.spacing.unit    
  }
});

export const WTable = withStyles(styles)(withTheme()((props: WTableProps) => <WTableInner {...props}/>))