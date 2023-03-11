import Tabs, { TabsProps } from '@mui/material/Tabs';
import * as React from 'react';
import { WIconButton } from '../../..';
import { BaseComponentProps } from '../../base/base-component-props';

export type WTabsProps = BaseComponentProps & TabsProps<any> & {
  scrollButtonStyle?: React.CSSProperties;
}

export const WTabs: React.FC<WTabsProps> = (props) => {
  const { scrollButtonStyle, ...tabsProps } = props;
  return (
    <Tabs
      ScrollButtonComponent={(props) => {
        if (!props.visible) {
          return null;
        }
        const icon = props.direction === 'left' ? 'chevron_left' : 'chevron_right';
        return <WIconButton id={props.id + "scroll-component"} icon={icon} {...props} style={scrollButtonStyle} />
      }}
      {...tabsProps}
    />
  )
};

export * from './w-tab';
