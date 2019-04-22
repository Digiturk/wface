import * as React from 'react';
import { Tabs, withTheme } from '@material-ui/core';
import { TabsProps } from '@material-ui/core/Tabs';
import { WIconButton, WIcon, WTheme } from '../../..';

export interface WTabsProps extends TabsProps {
  theme?: WTheme;
  scrollButtonStyle?: React.CSSProperties;
}

export class WTabsInner extends React.Component<WTabsProps, {}> {
  public render() {
    return (
      <Tabs
        ScrollButtonComponent={(props) => {
          console.log(props);
          if (!props.visible) {
            return null;
          }
          const icon = props.direction === 'left' ? 'chevron_left' : 'chevron_right';
          return <WIconButton icon={icon} {...props} style={this.props.scrollButtonStyle}/>
        }}
        {...this.props}
      />
    )
  }
}

export const WTabs = withTheme()((props: WTabsProps) => <WTabsInner {...props} />)
