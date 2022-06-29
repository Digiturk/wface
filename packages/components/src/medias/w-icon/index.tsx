import * as React from 'react';
import { Icon, useTheme } from '@mui/material';
import { IconProps } from '@mui/material/Icon';
import withTheme from '@mui/styles/withTheme';
import { WTheme } from '../../others/w-theme-provider/w-theme';
import makeStyles from '@mui/styles/makeStyles';
export interface WIconProps extends IconProps {
  icon?: string;
  iconSource?: 'material-icons' | 'fontawesome';
  iconSize?: 'small' | 'default' | 'large';
  /** @deprecated use iconSize instead */
  children?: string;
  theme?: WTheme;
  color?: any;
}

const sizeMap = {
  small: { size: 'sm', style: { verticalAlign: 'top', padding: '1.6px 2.68px', fontSize: 17 } },
  default: { size: 'lg', style: { verticalAlign: 'top', padding: '4.5px 3.68px', fontSize: 21 } },
  large: { size: '2x', style: { verticalAlign: 'top', padding: '1.8px 4.68px', fontSize: 31 } },
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    textTransform: 'none',
    boxShadow: theme.designDetails.defaultElevation ? '' : 'none',
  }
}));


export const WIcon: React.FC<WIconProps> = (props: WIconProps) => {
  const classes = useStyles();
  const theme = useTheme<WTheme>();
  const { iconSize = 'default', iconSource = 'material-icons', ...iconProps } = props;

  if (iconSource == 'material-icons') {
    return <Icon classes={classes} {...iconProps} style={{ fontSize: iconSize, ...iconProps.style }}>{props.icon || props.children}</Icon>
  }
  else {
    let className = props.icon || props.children;
    className += " fa-" + sizeMap[iconSize].size;

    const style = { ...sizeMap[iconSize].style, ...props.style };

    if (props.color && props.color != "inherit") {
      style.color = props.theme.palette[props.color].main;
    }

    return <i className={className as any} style={style} />
  }
}