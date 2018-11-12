import * as React from 'react';
import { WTabs, WTabsProps } from '../w-tabs';
import { WTab, WTabProps } from '../w-tabs/w-tab';
import { WTabPage, WTabPageProps } from './w-tab-page';
import { Omit } from '@material-ui/core'

type WTabsPropsBase = Omit<WTabsProps, "defaultValue">

export interface WTabContainerProps extends WTabsPropsBase{
  defaultValue?: number;
  children: React.ReactElement<WTabPage>[]
}

export class WTabContainer extends React.Component<WTabContainerProps, any> {
  static defaultProps = {
    indicatorColor: 'primary',
    textColor: 'primary'
  } as WTabContainerProps

  constructor(props) {
    super(props);
    this.state = {
      tabSelected: this.props.defaultValue || 0
    }
  }

  public render() {
    const tabSelected = this.props.value || this.state.tabSelected
    // @ts-ignore
    const children = this.props.children[tabSelected].props.children;
    return (
      <React.Fragment>
        <WTabs 
          {...this.props as WTabsPropsBase} 
          value={tabSelected} 
          onChange={(e, value) => this.setState({tabSelected: value})}>
          {this.props.children.map((tab, index) => <WTab {...tab.props as WTabProps} />)}
        </WTabs>        
        {children}
      </React.Fragment>
    );
  }
}
