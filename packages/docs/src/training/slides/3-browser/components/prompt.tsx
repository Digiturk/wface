import * as React from 'react';

export interface PromptProps {
}

export class Prompt extends React.Component<PromptProps, any> {
  colors = {
    client: '#3F51B5',
    network: '#FFA726',
    server: '#4CAF50'
  }

  public render() {
    return (
      <div style={{display: 'table', height: '100%', width: '100%'}}>
        <div style={{display: 'table-cell', verticalAlign: 'middle', transform: 'scale(1.2)'}}>
          <img src="/assets/slide/prompt.png" style={{margin:10}}/><br/>
          <img src="/assets/slide/onbeforeunload.png" style={{margin:10}}/>          
        </div>
      </div >
    );
  }
}


