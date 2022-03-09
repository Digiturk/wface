import * as React from 'react';
import { Tab } from '@mui/material';
import { TabProps } from '@mui/material/Tab';
import { BaseComponentProps } from '../../base/base-component-props';

export type WTabProps = BaseComponentProps & TabProps & {   
}

export class WTab extends React.Component<WTabProps, {}> {
  public render() {
    return <Tab {...this.props} />
  }
}