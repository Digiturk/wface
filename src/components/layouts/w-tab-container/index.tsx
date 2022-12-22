import React, { useState } from 'react';
import { WTabs, WTabsProps } from '../w-tabs';
import { WTab, WTabProps } from '../w-tabs/w-tab';
import { WTabPage } from './w-tab-page';
import { DistributiveOmit } from '@mui/types'

type WTabsPropsBase = DistributiveOmit<WTabsProps, "defaultValue">

export interface WTabContainerProps extends WTabsPropsBase {
  defaultValue?: number;
  //children?: React.ReactElement<WTabPage> | React.ReactElement<WTabPage>[];
  //wtabpage kullanılmadığı için hata vermekte! 
}


export const WTabContainer: React.FC<WTabContainerProps> = React.forwardRef((props: WTabContainerProps) => {
  //DEFAULTPROPS
  const { indicatorColor = 'primary', children = null, textColor = 'primary', } = props;
  //USESTATE
  const [tabSelected, settabSelected] = useState(props.value ? props.value : (props.defaultValue || 0))
  const [title, setTitle] = useState(props.title)

  {

    let children;

    if (Array.isArray(props.children)) {
      // @ts-ignore
      const childrenArray = props.children.filter(a => a);
      if (tabSelected >= childrenArray.length) {
        // @ts-ignore
        children = childrenArray[childrenArray.length - 1].props.children;
      }
      else {
        // @ts-ignore
        children = childrenArray[tabSelected].props.children;
      }
    }
    else {
      children = props.children && props.children.props.children;
    }
  }

  const tabs = Array.isArray(props.children) ? props.children.filter(a => a).map((tab, index) => <WTab {...tab.props as WTabProps} />) :
    <WTab {...props.children.props as any} />

  return (
    <React.Fragment>
      {title}
      {props.title}
      <WTabs
        {...props as WTabsPropsBase}
        value={tabSelected}
        onChange={(e, value) => {
          settabSelected((value: any) => {
            props.onChange && props.onChange(e, value);
          })
        }}>
        {tabs}
      </WTabs>
      <span key={tabSelected}>
        {children}
      </span>
    </React.Fragment>
  );
});

export * from './w-tab-page';