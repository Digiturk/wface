import * as React from 'react';
import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material/Button';
import { BaseComponentProps } from '../../base/base-component-props';
import makeStyles from '@mui/styles/makeStyles';
import { useTheme } from '@mui/styles';
import { WTheme } from '../../others';
import { Divider } from '@mui/material';

const useStyles = makeStyles((theme: any) => ({
  root: {
    
  },
  firstButton:{
  borderTopLeftRadius:"6px !important",
  borderBottomLeftRadius:"6px !important",
  borderTopRightRadius:"0px !important",
  borderBottomRightRadius:"0px  !important",
  backgroundColor: "white  !important",
  marginLeft:"30px !important ",
  width:" 76px",
  height: "37px",
  
   borderRadius:"0 !important"
  },
  secondButton:{
    borderTopRightRadius:"6px !important",
    borderBottomRightRadius:"6px !important",
    borderTopLeftRadius:"0px !important",
    borderBottomLeftRadius:"0px !important",
    backgroundColor: "white  !important",
    width:" 76px",
    height: "37px",


  },
  mainButton:{
    marginTop:"10px"
  }

}));

export type WMainButtonProps = BaseComponentProps & ButtonProps & {
 text?:string;
}

export const WMainButton: React.FC<WMainButtonProps> = React.forwardRef((props) => {
  const classes = useStyles();
  const theme = useTheme<WTheme>();

  return (
    <div className={classes.mainButton}>
    <Button {...props} classes={classes} className={classes.firstButton} disableElevation={theme.designDetails.defaultElevation === 0} >CMS</Button>

    <Button {...props} classes={classes}   className={classes.secondButton} disableElevation={theme.designDetails.defaultElevation === 0} >CRM</Button>
    
    </div>
  );
});
