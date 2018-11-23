import * as React from 'react';
import { WGrid } from '@wface/components';
import constants from '../../../util/constants';

export interface TcpProps {
}

export class Tcp extends React.Component<TcpProps, any> {
  colors = {
    client: '#3F51B5',
    network: '#FFA726',
    server: '#4CAF50'
  }

  public render() {
    return (
      <div style={{ display: 'table', height: '100%', width: '100%' }}>
        <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
          <img src="/assets/slide/tcp.png"/>
        </div>
      </div >
    );
  }
}
