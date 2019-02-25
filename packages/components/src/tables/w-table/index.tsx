import * as React from 'react'
import MaterialTable, { MaterialTableProps } from 'material-table'
import { createStyles, withStyles, withTheme } from '@material-ui/core'
import { WPaper } from '../../layouts/w-paper';
import { WTheme } from '../../others/w-theme-provider/w-theme';

export interface WTableProps extends MaterialTableProps {
  classes?: any;
  theme?: WTheme;
  style?: React.CSSProperties;
}

class WTableInner extends React.Component<WTableProps, {}> {
  public render() {
    const { classes, style, ...tableProps } = this.props;
    return (
      <div className={classes.root} style={style}>
        <MaterialTable 
          {...tableProps}
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