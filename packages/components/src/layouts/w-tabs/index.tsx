import { withTheme } from '@material-ui/styles';
import Tabs, { TabsProps } from '@material-ui/core/Tabs';
import ButtonBase from '@material-ui/core/ButtonBase';
import * as React from 'react';
import { WIconButton, WTheme } from '../../..';
import { BaseComponentProps } from '../../base/base-component-props';

export type WTabsProps = BaseComponentProps & TabsProps<any> & { 
  theme?: WTheme;
  scrollButtonStyle?: React.CSSProperties;
}

var x: WTabsProps;

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
export const WTabs = withTheme(WTabsInner);
