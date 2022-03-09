import * as React from 'react';
import { WTabProps } from '../w-tabs/w-tab';
import { Omit } from '@mui/material';

export interface WTabPageProps extends Omit<WTabProps, "value">{  
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
