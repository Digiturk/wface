import * as React from 'react';
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import { emphasize } from '@mui/material/styles';
import { BaseComponentProps } from '../../base/base-component-props';
import makeStyles from '@mui/styles/makeStyles';


export type WMenuItemProps<D extends React.ElementType = "li"> = BaseComponentProps & MenuItemProps<D> & { 
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    '&:hover': {
      backgroundColor: theme.palette.background.default
    }
  },
  selected: {
    color: theme.palette.primary.main,
    backgroundColor: emphasize(theme.palette.background.default, 0.04) + ' !important',
    fontWeight: 500
  }
}));


export const WMenuItemInner : React.FC<WMenuItemProps> = React.forwardRef((props:WMenuItemProps, ref) => {
  const classes = useStyles();

  const {id="", dense="true"}=props;

  return (
     <MenuItem {...props} classes={classes} ref={ref} />
  );
});

export const WMenuItem = (WMenuItemInner);


// class WMenuItemInner extends React.Component<WMenuItemProps, {}> {
//   static defaultProps: WMenuItemProps = { 
//     id: '',
//     dense: true
//   }

//   public render() {
//     return <MenuItem {...this.props} />
//   }
// }

// const styles = (theme: WTheme) => createStyles({
//   root: {
//     '&:hover': {
//       backgroundColor: theme.palette.background.default
//     }
//   },
//   selected: {
//     color: theme.palette.primary.main,
//     backgroundColor: emphasize(theme.palette.background.default, 0.04) + ' !important',
//     fontWeight: 500
//   }
// });

// export const WMenuItem = withStyles(styles, { withTheme: false })(WMenuItemInner);