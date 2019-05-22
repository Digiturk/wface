import * as React from 'react';
import { Tabs, withTheme } from '@material-ui/core';
import { TabsProps } from '@material-ui/core/Tabs';
import { WIconButton, WIcon, WTheme } from '../../..';
import { BaseComponentProps } from '../../base/base-component-props';

export type WTabsProps = BaseComponentProps & TabsProps & { 
  theme?: WTheme;
  scrollButtonStyle?: React.CSSProperties;
}

export class WTabsInner extends React.Component<WTabsProps, {}> {
  public render() {
    const { scrollButtonStyle, ...tabsProps } = this.props;

    return (
      <Tabs
        ScrollButtonComponent={(props) => {          
          if (!props.visible) {
            return null;
          }
          const icon = props.direction === 'left' ? 'chevron_left' : 'chevron_right';
          return <WIconButton id={this.props.id + "scroll-component"} icon={icon} {...props} style={scrollButtonStyle}/>
        }}
        {...tabsProps}
      />
    )
  }
}

export const WTabs = withTheme()((props: WTabsProps) => <WTabsInner {...props} />)
