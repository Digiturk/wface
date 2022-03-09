import * as React from 'react'
import MaterialTable, { MaterialTableProps } from 'material-table'
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import withTheme from '@mui/styles/withTheme';
import { WPaper } from '../../layouts/w-paper';
import { WTheme } from '../../others/w-theme-provider/w-theme';
import { BaseComponentProps } from '../../base/base-component-props';

export type WTableProps = BaseComponentProps & MaterialTableProps<any> & { 
  classes?: any;
  theme?: WTheme;
  style?: React.CSSProperties;
}

class WTableInner extends React.Component<WTableProps, {}> {
  public render() {
    const { classes, style, id, ...tableProps } = this.props;

    const extendedProps = {
      ...this.props.theme.props.WTable,
      ...tableProps,
      components: { ...(this.props.theme.props.WTable || {}).components, ...tableProps.components },
      icons: { ...(this.props.theme.props.WTable || {}).icons, ...tableProps.icons },
      localization: { ...(this.props.theme.props.WTable || {}).localization, ...tableProps.localization },
      options: { ...(this.props.theme.props.WTable || {}).options, ...tableProps.options },
    }

    return (
      <div id={id} className={classes.root} style={style}>
        <MaterialTable 
          {...extendedProps}
          components={{
            Container: (props) => <WPaper {...props} elevation={this.props.theme.designDetails.defaultElevation}/>,
            ...extendedProps.components
          }}
        />
      </div>
    )
  }
}

const styles = (theme:WTheme) => createStyles({
  root: {
    margin: theme.spacing()
  }
});

export const WTable = withStyles(styles, {withTheme: true})((props:WTableProps) => <WTableInner {...props}/>)