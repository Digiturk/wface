import * as React from 'react';
import { Icon } from '@mui/material';
import { IconProps } from '@mui/material/Icon';
import withTheme from '@mui/styles/withTheme';
import { WTheme } from '../../others/w-theme-provider/w-theme';

export interface WIconProps extends IconProps {
  icon?: string;
  iconSource?: 'material-icons' | 'fontawesome';
  iconSize?: 'small' | 'default' | 'large';
  /** @deprecated use iconSize instead */
  children?: string;
  theme?: WTheme;
}

const sizeMap = {
  small: {size: 'sm', style: {verticalAlign: 'top', padding: '1.6px 2.68px', fontSize: 17}},
  default: {size: 'lg', style: {verticalAlign: 'top', padding: '4.5px 3.68px', fontSize: 21}},
  large: {size: '2x', style: {verticalAlign: 'top', padding: '1.8px 4.68px', fontSize: 31}},
}

class WIconInner extends React.Component<WIconProps, {}> {  
  static defaultProps: WIconProps = {
    iconSource: 'material-icons',
    iconSize: 'default'
  }

  public render() {
    const { iconSize, iconSource, ...iconProps } = this.props;

    if(iconSource == 'material-icons') {
      return <Icon {...iconProps} fontSize={iconSize}>{this.props.icon || this.props.children}</Icon>
    }
    else {
      let className = this.props.icon || this.props.children;
      className += " fa-" + sizeMap[iconSize].size;

      const style = {...sizeMap[iconSize].style, ...this.props.style};
      
      if(this.props.color && this.props.color != "default") {
        style.color = this.props.theme.palette[this.props.color].main;
      }
      
      return <i className={className as any} style={style} />
    }
  }
}

export const WIcon = withTheme(WIconInner);