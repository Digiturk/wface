import * as React from 'react'
import MaterialTable, { MaterialTableProps } from 'material-table';
import { WPaper } from '../../layouts/w-paper';
import { WTheme } from '../../others/w-theme-provider/w-theme';
import { BaseComponentProps } from '../../base/base-component-props';
import makeStyles from '@mui/styles/makeStyles';
import { useTheme } from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({
  root: {
    margin: theme.spacing()
  }
}));


export type WTableProps = BaseComponentProps & MaterialTableProps<any> & {
  style?: React.CSSProperties;
}

export const WTable: React.FC<WTableProps> = (props) => {
  const classes = useStyles();
  const theme = useTheme<WTheme>();
  const { style, id, ...tableProps } = props;

  const extendedProps = {
    ...theme.props?.WTable,
    ...tableProps,
    components: { ...(theme.props?.WTable || {}).components, ...tableProps.components },
    icons: { ...(theme.props?.WTable || {}).icons, ...tableProps.icons },
    localization: { ...(theme.props?.WTable || {}).localization, ...tableProps.localization },
    options: { ...(theme.props?.WTable || {}).options, ...tableProps.options },
  }

  return (
    <div id={id} className={classes.root} style={style}>
      <MaterialTable
        {...extendedProps}
        components={{
          Container: (props) => <WPaper {...props} elevation={theme.designDetails.defaultElevation} />,
          ...extendedProps.components
        }}
      />
    </div>
  )
};