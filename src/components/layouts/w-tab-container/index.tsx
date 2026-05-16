import React, { useMemo, useState } from 'react';
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


export const WTabContainer: React.FC<WTabContainerProps> = React.forwardRef((props: WTabContainerProps, ref) => {
  //DEFAULTPROPS
  const { indicatorColor = 'primary', children = null, textColor = 'primary', } = props;
  //USESTATE
  const [tabSelected, setTabSelected] = useState(props.value ? props.value : (props.defaultValue || 0))
  const [title, setTitle] = useState(props.title)

  const child = useMemo(() => {
    let result:React.ReactNode = null;

    if (Array.isArray(props.children)) {
      // @ts-ignore
      const childrenArray = props.children.filter(a => a);
      if (tabSelected >= childrenArray.length) {
        // @ts-ignore
        result = childrenArray[childrenArray.length - 1].props.children;
      }
      else {
        // @ts-ignore
        result = childrenArray[tabSelected].props.children;
      }
    }
    else {
      result = props.children && props.children.props.children;
    }

    return result;
  }, [children, tabSelected])

  const tabs = Array.isArray(props.children) ? props.children.filter(a => a).map((tab, index) => <WTab {...tab.props as WTabProps} />) :
    <WTab {...props.children.props as any} />

  return (
    <React.Fragment>
      {title}
      {props.title}
      <WTabs
        {...props as WTabsPropsBase}
        ref={ref}
        value={tabSelected}
        onChange={(e, value) => {
          props.onChange && props.onChange(e, value);
          setTabSelected(value);
        }}>
        {tabs}
      </WTabs>
      <span key={tabSelected}>
        {child}
      </span>
    </React.Fragment>
  );
});

export * from './w-tab-page';