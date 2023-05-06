import * as React from 'react'
import MaterialTable, { MaterialTableProps } from 'material-table';
import { WPaper } from '../../layouts/w-paper';
import { WTheme } from '../../others/w-theme-provider/w-theme';
import { BaseComponentProps } from '../../base/base-component-props';
import makeStyles from '@mui/styles/makeStyles';
import { useTheme } from '@mui/styles';
import { forwardRef } from 'react';
import { WIcon } from '../../medias';

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
    components: {
      ...(theme.props?.WTable || {}).components,      
      ...tableProps.components
    },
    icons: {
      Add: (props: any) => <WIcon {...props} icon="add"/>,
      Check: (props: any) => <WIcon {...props} icon="check"/>,
      Clear: (props: any) => <WIcon {...props} icon="clear"/>,
      Delete: (props: any) => <WIcon {...props} icon="delete"/>,
      DetailPanel: (props: any) => <WIcon {...props} icon="chevron_right"/>,
      Edit: (props: any) => <WIcon {...props} icon="edit"/>,
      Export: (props: any) => <WIcon {...props} icon="export"/>,
      Filter: (props: any) => <WIcon {...props} icon="filter"/>,
      FirstPage: (props: any) => <WIcon {...props} icon="first_page"/>,
      LastPage: (props: any) => <WIcon {...props} icon="last_page"/>,
      NextPage: (props: any) => <WIcon {...props} icon="next_page"/>,
      PreviousPage: (props: any) => <WIcon {...props} icon="previous_page"/>,
      ResetSearch: (props: any) => <WIcon {...props} icon="reset_search"/>,
      Search: (props: any) => <WIcon {...props} icon="search"/>,
      SortArrow: (props: any) => <WIcon {...props} icon="sort_arrow"/>,
      ThirdStateCheck: (props: any) => <WIcon {...props} icon="third_state_check"/>,
      ViewColumn: (props: any) => <WIcon {...props} icon="view_column"/>,
      ...(theme.props?.WTable || {}).icons,
      ...tableProps.icons
    },
    localization: { ...(theme.props?.WTable || {}).localization, ...tableProps.localization },
    options: { ...(theme.props?.WTable || {}).options, ...tableProps.options },
  }

  return (
    <div id={id} className={classes.root} style={style}>
      {/* @ts-ignore */}
      <MaterialTable
        {...extendedProps}
        components={{
          Container: (props: any) => <WPaper {...props} elevation={theme.designDetails?.defaultElevation} />,        
          ...extendedProps.components
        }}
      />
    </div>
  )
};