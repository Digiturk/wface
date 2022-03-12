import * as React from 'react';
import { WTabProps } from '../w-tabs/w-tab';
import { DistributiveOmit } from '@mui/types';

export interface WTabPageProps extends DistributiveOmit<WTabProps, "value">{  
}

export class WTabPage extends React.Component<WTabPageProps, any> {
  public render() {
    return (
      <div>
        laksjdlkjdlkasjas
      </div>
    );
  }
}
