import withTheme from '@mui/styles/withTheme';
import Tabs, { TabsProps } from '@mui/material/Tabs';
import ButtonBase from '@mui/material/ButtonBase';
import * as React from 'react';
import { WIconButton, WTheme } from '../../..';
import { BaseComponentProps } from '../../base/base-component-props';

export type WTabsProps = BaseComponentProps & TabsProps<any> & { 
  theme?: WTheme;
  scrollButtonStyle?: React.CSSProperties;
}

var x: WTabsProps;


export const   WTabsInner  : React.FC<WTabsProps> = React.forwardRef((props) => {
  const { scrollButtonStyle, ...tabsProps } = props;
  return (
    <Tabs
        ScrollButtonComponent={(props) => {          
          if (!props.visible) {
            return null;
          }
          const icon = props.direction === 'left' ? 'chevron_left' : 'chevron_right';
          return <WIconButton id={props.id + "scroll-component"} icon={icon} {...props} style={scrollButtonStyle}/>
        }}
        {...tabsProps}        
      />
  )
});

export const WTabs = withTheme(WTabsInner);
export * from './w-tab';
