import * as React from 'react';
import { Tab } from '@material-ui/core';
import { TabProps } from '@material-ui/core/Tab';
import { BaseComponentProps } from '../../base/base-component-props';

export type WTabProps = BaseComponentProps & TabProps & {   
}

export class WTab extends React.Component<WTabProps, {}> {
  public render() {
    return <Tab {...this.props} />
  }
}