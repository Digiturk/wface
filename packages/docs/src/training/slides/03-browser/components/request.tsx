import * as React from 'react';

export interface RequestProps {
}

export class Request extends React.Component<RequestProps, any> {
  colors = {
    client: '#3F51B5',
    network: '#FFA726',
    server: '#4CAF50'
  }

  public render() {
    return (
      <div style={{display: 'table', height: '100%', width: '100%'}}>
        <div style={{display: 'table-cell', verticalAlign: 'middle', transform: 'scale(1.2)'}}>
          <img src="/assets/slide/request.png" />
        </div>
      </div >
    );
  }
}


